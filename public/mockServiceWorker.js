/* eslint-disable */
/* tslint:disable */

/**
 * Mock Service Worker (1.2.2).
 * @see https://github.com/mswjs/msw
 * - Please do NOT modify this file.
 * - Please do NOT serve this file on production.
 */

const INTEGRITY_CHECKSUM = '3d6b9f06410d179a7f7404d4bf4c3c70'
const activeClientIds = new Set()

self.addEventListener('install', function () {
  self.skipWaiting()
***REMOVED***)

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim())
***REMOVED***)

self.addEventListener('message', async function (event) {
  const clientId = event.source.id

  if (!clientId || !self.clients) {
    return
  ***REMOVED***

  const client = await self.clients.get(clientId)

  if (!client) {
    return
  ***REMOVED***

  const allClients = await self.clients.matchAll({
    type: 'window',
  ***REMOVED***)

  switch (event.data) {
    case 'KEEPALIVE_REQUEST': {
      sendToClient(client, {
        type: 'KEEPALIVE_RESPONSE',
  ***REMOVED***)
      break
***REMOVED***

    case 'INTEGRITY_CHECK_REQUEST': {
      sendToClient(client, {
        type: 'INTEGRITY_CHECK_RESPONSE',
        payload: INTEGRITY_CHECKSUM,
  ***REMOVED***)
      break
***REMOVED***

    case 'MOCK_ACTIVATE': {
      activeClientIds.add(clientId)

      sendToClient(client, {
        type: 'MOCKING_ENABLED',
        payload: true,
  ***REMOVED***)
      break
***REMOVED***

    case 'MOCK_DEACTIVATE': {
      activeClientIds.delete(clientId)
      break
***REMOVED***

    case 'CLIENT_CLOSED': {
      activeClientIds.delete(clientId)

      const remainingClients = allClients.filter((client) => {
        return client.id !== clientId
  ***REMOVED***)

      // Unregister itself when there are no more clients
      if (remainingClients.length === 0) {
        self.registration.unregister()
  ***REMOVED***

      break
***REMOVED***
  ***REMOVED***
***REMOVED***)

self.addEventListener('fetch', function (event) {
  const { request ***REMOVED*** = event
  const accept = request.headers.get('accept') || ''

  // Bypass server-sent events.
  if (accept.includes('text/event-stream')) {
    return
  ***REMOVED***

  // Bypass navigation requests.
  if (request.mode === 'navigate') {
    return
  ***REMOVED***

  // Opening the DevTools triggers the "only-if-cached" request
  // that cannot be handled by the worker. Bypass such requests.
  if (request.cache === 'only-if-cached' && request.mode !== 'same-origin') {
    return
  ***REMOVED***

  // Bypass all requests when there are no active clients.
  // Prevents the self-unregistered worked from handling requests
  // after it's been deleted (still remains active until the next reload).
  if (activeClientIds.size === 0) {
    return
  ***REMOVED***

  // Generate unique request ID.
  const requestId = Math.random().toString(16).slice(2)

  event.respondWith(
    handleRequest(event, requestId).catch((error) => {
      if (error.name === 'NetworkError') {
        console.warn(
          '[MSW] Successfully emulated a network error for the "%s %s" request.',
          request.method,
          request.url,
        )
        return
  ***REMOVED***

      // At this point, any exception indicates an issue with the original request/response.
      console.error(
        `\
[MSW] Caught an exception from the "%s %s" request (%s). This is probably not a problem with Mock Service Worker. There is likely an additional logging output above.`,
        request.method,
        request.url,
        `${error.name***REMOVED***: ${error.message***REMOVED***`,
      )
***REMOVED***),
  )
***REMOVED***)

async function handleRequest(event, requestId) {
  const client = await resolveMainClient(event)
  const response = await getResponse(event, client, requestId)

  // Send back the response clone for the "response:*" life-cycle events.
  // Ensure MSW is active and ready to handle the message, otherwise
  // this message will pend indefinitely.
  if (client && activeClientIds.has(client.id)) {
    ;(async function () {
      const clonedResponse = response.clone()
      sendToClient(client, {
        type: 'RESPONSE',
        payload: {
          requestId,
          type: clonedResponse.type,
          ok: clonedResponse.ok,
          status: clonedResponse.status,
          statusText: clonedResponse.statusText,
          body:
            clonedResponse.body === null ? null : await clonedResponse.text(),
          headers: Object.fromEntries(clonedResponse.headers.entries()),
          redirected: clonedResponse.redirected,
    ***REMOVED***,
  ***REMOVED***)
***REMOVED***)()
  ***REMOVED***

  return response
***REMOVED***

// Resolve the main client for the given event.
// Client that issues a request doesn't necessarily equal the client
// that registered the worker. It's with the latter the worker should
// communicate with during the response resolving phase.
async function resolveMainClient(event) {
  const client = await self.clients.get(event.clientId)

  if (client?.frameType === 'top-level') {
    return client
  ***REMOVED***

  const allClients = await self.clients.matchAll({
    type: 'window',
  ***REMOVED***)

  return allClients
    .filter((client) => {
      // Get only those clients that are currently visible.
      return client.visibilityState === 'visible'
***REMOVED***)
    .find((client) => {
      // Find the client ID that's recorded in the
      // set of clients that have registered the worker.
      return activeClientIds.has(client.id)
***REMOVED***)
***REMOVED***

async function getResponse(event, client, requestId) {
  const { request ***REMOVED*** = event
  const clonedRequest = request.clone()

  function passthrough() {
    // Clone the request because it might've been already used
    // (i.e. its body has been read and sent to the client).
    const headers = Object.fromEntries(clonedRequest.headers.entries())

    // Remove MSW-specific request headers so the bypassed requests
    // comply with the server's CORS preflight check.
    // Operate with the headers as an object because request "Headers"
    // are immutable.
    delete headers['x-msw-bypass']

    return fetch(clonedRequest, { headers ***REMOVED***)
  ***REMOVED***

  // Bypass mocking when the client is not active.
  if (!client) {
    return passthrough()
  ***REMOVED***

  // Bypass initial page load requests (i.e. static assets).
  // The absence of the immediate/parent client in the map of the active clients
  // means that MSW hasn't dispatched the "MOCK_ACTIVATE" event yet
  // and is not ready to handle requests.
  if (!activeClientIds.has(client.id)) {
    return passthrough()
  ***REMOVED***

  // Bypass requests with the explicit bypass header.
  // Such requests can be issued by "ctx.fetch()".
  if (request.headers.get('x-msw-bypass') === 'true') {
    return passthrough()
  ***REMOVED***

  // Notify the client that a request has been intercepted.
  const clientMessage = await sendToClient(client, {
    type: 'REQUEST',
    payload: {
      id: requestId,
      url: request.url,
      method: request.method,
      headers: Object.fromEntries(request.headers.entries()),
      cache: request.cache,
      mode: request.mode,
      credentials: request.credentials,
      destination: request.destination,
      integrity: request.integrity,
      redirect: request.redirect,
      referrer: request.referrer,
      referrerPolicy: request.referrerPolicy,
      body: await request.text(),
      bodyUsed: request.bodyUsed,
      keepalive: request.keepalive,
***REMOVED***,
  ***REMOVED***)

  switch (clientMessage.type) {
    case 'MOCK_RESPONSE': {
      return respondWithMock(clientMessage.data)
***REMOVED***

    case 'MOCK_NOT_FOUND': {
      return passthrough()
***REMOVED***

    case 'NETWORK_ERROR': {
      const { name, message ***REMOVED*** = clientMessage.data
      const networkError = new Error(message)
      networkError.name = name

      // Rejecting a "respondWith" promise emulates a network error.
      throw networkError
***REMOVED***
  ***REMOVED***

  return passthrough()
***REMOVED***

function sendToClient(client, message) {
  return new Promise((resolve, reject) => {
    const channel = new MessageChannel()

    channel.port1.onmessage = (event) => {
      if (event.data && event.data.error) {
        return reject(event.data.error)
  ***REMOVED***

      resolve(event.data)
***REMOVED***

    client.postMessage(message, [channel.port2])
  ***REMOVED***)
***REMOVED***

function sleep(timeMs) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeMs)
  ***REMOVED***)
***REMOVED***

async function respondWithMock(response) {
  await sleep(response.delay)
  return new Response(response.body, response)
***REMOVED***
