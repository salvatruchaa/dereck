export default function manifest() {
    return{
        name:'Mi Aplicacion PWA',
        short_name:'PWA App',
        description:'Aplicacion PWA construida con Next.js',
        start_url:'/',
        display:'standalone',
        background_color: '#F03E7C',
        theme_color: '#F9FAFB',
        icons: [
            {
                src: '/icon-512.jpeg',
                sizes: '192x192',
                type: 'image/png',

            },
            {
                src: '/icon-512.jpeg',
                sizes: '512x512',
                type: 'image/jpeg',
            }
        ]
    }
}