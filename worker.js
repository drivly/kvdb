import { set } from './set'

const objs = {}

export default {
  fetch: (req, env, ctx) => {
    const { hostname } = new URL(request.url)
    
    if (!objs[hostname]) {
      objs[hostname] = env.KVProxy.get(env.KVProxy.idFromName(hostname))
    }
    
    return objs[hostname].fetch(req.clone())
}

export class KVProxy {
  constructor(state, env) {
    state.blockConcurrencyWhile(
      async (state, env) => {
        this.db = await env.KVDB.get(state.id, { type: "json" })
      }
    )
  }

  async fetch(req, env, ctx) {
    const { hostname, pathname, searchParams } = new URL(request.url)
    const paths = pathname.split('/')
    if (paths[0] == 'set') {
      const [ _, path, value] = paths
      set(db, path, value)
      ctx.waitUntil(env.KVDB.get(state.id, this.db, { type: "json" }))
      return this.db
    }
    else {
       return this.db
    }
  }
}
