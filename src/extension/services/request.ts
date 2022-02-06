import type { StorageServiceRequest, StorageService } from './storage'

export type ServiceRequest = {
  service: StorageService
  payload: StorageServiceRequest
}
