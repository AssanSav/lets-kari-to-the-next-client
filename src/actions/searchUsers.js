import { SEARCH } from "./types"

export const searchUsers = ( query) => {
  return {type: SEARCH, payload: query}
}