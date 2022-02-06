import browser from 'webextension-polyfill'
import * as _ from 'lodash'
import { storage, StorageServiceRequest } from '../services/storage'
import type { ServiceRequest } from '../services/request'

const services = { storage: storage }

browser.runtime.onMessage.addListener((msg, sender) => {
  const request = msg as ServiceRequest
  if (sender.id === browser.runtime.id && _.keysIn(services).includes(request.service)) {
    const service = services[request.service]
    return service.handleRequest(request)
  } else {
    return Promise.reject(new Error('unexpected action'))
  }
})
