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
        this.db = await env.KVDB.get(state.id, { type: "text" })
      }
    )
  }

  async fetch(req, env, ctx) {
    const { hostname, pathname, searchParams } = new URL(request.url)
    const paths = pathname.split('/')
    if (paths[0] == 'set') {
      const [ _, resource
      ctx.waitUntil(env.KVDB.get(state.id, this.db, { type: "text" }))
      return this.db
    }
    else {
       return this.db
    }
    
//     Object.fromEntries(searchParams)
//     let storagePromise = this.state.storage.put(ip, data)
//     await storagePromise
//     return new Response(ip + " stored " + data)
  }
}
