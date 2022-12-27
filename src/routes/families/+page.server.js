export async function load( {data, fetch}) {
    //console.log("logging data")
    const res = await fetch('https://orchard-api-production.up.railway.app/families')
    const families = await res.json()
    //console.log({res})
    return { families: families }
}

export const actions = {
    create: async ({cookies, request}) => {
        const data = await request.formData()
        console.log(data)
        const familyname = data.get('name')
        console.log('got name: '+familyname)
        const body = { name: familyname }

        try {
            const res = await fetch('https://orchard-api-production.up.railway.app/families', {
                method: "POST",
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            })
            const answer = await res.json()
            console.log("server says: "+answer)
            return answer
        } catch(err) {
            console.log(err)
        }
    }
}