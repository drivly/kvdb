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
    if (paths[0] == 'put') {
      const [ _, path, value] = paths
      set(db, path, value)
      // TODO: if there are multiple writes within 1 sec, we will get a KV error, so we need to wait 1 sec
      ctx.waitUntil(env.KVDB.put(state.id, this.db, { type: "json" })
                    .then(data => this.lastWrite == Date.now())
      return this.db
    }
    else {
       return this.db
    }
  }
}
