/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverComponents: true,
    },
    images:{
        domains:[
            "oaidalleapiprodscus.blob.core.windows.net",
        ]
    }
}

module.exports = nextConfig
