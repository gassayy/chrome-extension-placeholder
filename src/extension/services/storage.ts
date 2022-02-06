import * as _ from 'lodash'
import browser from 'webextension-polyfill'
import type { ServiceRequest } from './request'

// TODO:
// it seems to use local storage for persist data is a bad idea
// https://www.rdegges.com/2018/please-stop-using-local-storage/,
// although it maybe thread safe.
// https://stackoverflow.com/questions/22001112/is-localstorage-thread-safe
// possible alterniative: indexedDB, https://www.npmjs.com/package/idb

const service = {
  get: (key: string) => {
    console.log('get:', key)
    return browser.storage.local.get([key])
  },
  set: (key: string, value: string) => {
    console.log('set:', key, value)
    return browser.storage.local.set({ [key]: value })
  },

  remove: (key: string) => {
    console.log('remove:', key)
    return browser.storage.local.remove(key)
  },
}

export type StorageService = 'storage'

export type StorageServiceRequest = {
  action: 'get' | 'set' | 'remove'
  key: string
  value?: string
}

export type StorageServiceResponse = Record<string, string>

export const storage = {
  id: 'storage',
  handleRequest: (r: ServiceRequest) => {
    const request = r as unknown as StorageServiceRequest
    switch (request.action) {
      case 'get':
        return service.get(request.key)
      case 'set':
        return request.value
          ? service.set(request.key, request.value)
          : Promise.reject(new Error('requestion missing param value'))
      case 'remove':
        return service.remove(request.key)
      default:
        return Promise.reject(new Error('unexpected action'))
    }
  },
}
