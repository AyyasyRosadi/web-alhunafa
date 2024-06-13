/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'http',
                hostname:'192.168.1.8',
                port:'8080',
                pathname:'/file/**'
            },
            {
                protocol:'http',
                hostname:'192.168.1.12',
                port:'8080',
                pathname:'/file/**'
            },
            {
                protocol:'https',
                hostname:'https://api-alhunafa.diyaproject.id',
                pathname:'/file/**'
            }
        ]
    }
};

export default nextConfig;
