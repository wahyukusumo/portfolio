import { createApp } from 'vue'
import './index.css'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import drag from "v-drag"
import App from './App.vue'

const app = createApp(App)

app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('ion-')
app.config.warnHandler = () => null;
app.use(drag)
app.use(autoAnimatePlugin)

app.mount('#app')