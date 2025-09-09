const footer = document.getElementById('footer')
footer.innerHTML = `
    <footer class="border-t border-white/10 bg-slate-950 text-slate-300">
        <div class="mx-auto max-w-7xl px-5 py-12">
            <div class="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <!-- Brand -->
                <a href="/" class="inline-flex items-center gap-3 text-white">
                    <img src="/docs/assets/images/Logo.png" class="h-5" alt="">
                </a>

                <!-- Legal links -->
                <nav class="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                    <a href="/aviso-legal.html"
                        class="rounded hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30">
                        Aviso Legal
                    </a>
                    <a href="/terminos-y-condiciones.html"
                        class="rounded hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30">
                        Términos y Condiciones
                    </a>
                    <a href="/politica-de-cookies.html"
                        class="rounded hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30">
                        Política de Cookies
                    </a>
                    <a href="/politica-de-privacidad.html"
                        class="rounded hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30">
                        Política de Privacidad
                    </a>
                </nav>
            </div>

            <!-- Bottom bar -->
            <div
                class="mt-8 flex flex-col-reverse gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p class="text-xs text-slate-400">© 2025 Tasable. Todos los derechos reservados.</p>

                <!-- (Optional) social icons — remove if not needed -->
                <div class="flex items-center gap-2">
                    <a href="#" aria-label="Twitter"
                        class="rounded-lg p-2 hover:bg-white/5 ring-1 ring-white/10 hover:ring-white/20">
                        <svg class="h-4 w-4 text-slate-300" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M8 19c7.5 0 11.6-6.2 11.6-11.6v-.5A8.2 8.2 0 0 0 22 4.5a8.1 8.1 0 0 1-2.3.6A4 4 0 0 0 21.4 3a8.2 8.2 0 0 1-2.6 1 4 4 0 0 0-6.9 3.7A11.3 11.3 0 0 1 3 3.9a4 4 0 0 0 1.2 5.3A4 4 0 0 1 3 8.6v.1a4 4 0 0 0 3.2 4 4 4 0 0 1-1.8.1 4 4 0 0 0 3.7 2.7A8.1 8.1 0 0 1 2 18.2 11.4 11.4 0 0 0 8 19" />
                        </svg>
                    </a>
                    <a href="#" aria-label="LinkedIn"
                        class="rounded-lg p-2 hover:bg-white/5 ring-1 ring-white/10 hover:ring-white/20">
                        <svg class="h-4 w-4 text-slate-300" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M6 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM4 8h4v12H4zM14.5 8A4.5 4.5 0 0 1 19 12.5V20h-4v-6a2 2 0 1 0-4 0v6H7v-12h4v1.6A4.5 4.5 0 0 1 14.5 8z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>
`