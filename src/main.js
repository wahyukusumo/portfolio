import { createApp } from 'vue'
import '@/style.css'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from '@/App.vue'

const app = createApp(App)

app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('ion-')
app.config.warnHandler = () => null
app.use(autoAnimatePlugin)

app.mount('#app')
