// AAA SOLUSI - CLIENT SIDE JAVASCRIPT
// Standalone engine for GitHub Pages (100% Offline Static Ready)

// 1. DATA MASTER: KATALOG PRODUK CCTV HILOOK
const PRODUCTS = [
    {
        id: "pkt-2",
        name: "Paket 2 Kamera Hilook",
        cameras: 2,
        resolution: "2MP",
        type: "Indoor/Outdoor",
        dvr: "DVR 4 Channel",
        storage: "HDD 500GB",
        cable: "Free Kabel Coaxial & Power 50 meter",
        price: 2750000,
        priceFormatted: "Rp 2.750.000",
        category: "small",
        features: [
            "2 Kamera 2MP Indoor/Outdoor",
            "DVR 4 Channel Hilook",
            "Penyimpanan HDD 500GB",
            "Free Kabel Coaxial & Power 50m",
            "Free Jasa Instalasi Pasang",
            "Garansi Layanan 1 Bulan"
        ],
        image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "pkt-4",
        name: "Paket 4 Kamera Hilook",
        cameras: 4,
        resolution: "2MP",
        type: "Indoor/Outdoor",
        dvr: "DVR 4 Channel",
        storage: "HDD 500GB",
        cable: "Free Kabel Coaxial & Power 50 meter",
        price: 3650000,
        priceFormatted: "Rp 3.650.000",
        category: "small",
        features: [
            "4 Kamera 2MP Indoor/Outdoor",
            "DVR 4 Channel Hilook",
            "Penyimpanan HDD 500GB",
            "Free Kabel Coaxial & Power 50m",
            "Free Jasa Instalasi Pasang",
            "Garansi Layanan 1 Bulan"
        ],
        image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "pkt-6",
        name: "Paket 6 Kamera Hilook",
        cameras: 6,
        resolution: "2MP",
        type: "Indoor/Outdoor",
        dvr: "DVR 8 Channel",
        storage: "HDD 1TB (1000GB)",
        cable: "Free Kabel Coaxial & Power 50 meter",
        price: 5250000,
        priceFormatted: "Rp 5.250.000",
        category: "medium",
        features: [
            "6 Kamera 2MP Indoor/Outdoor",
            "DVR 8 Channel Hilook",
            "Penyimpanan HDD 1TB (1000GB)",
            "Free Kabel Coaxial & Power 50m",
            "Free Jasa Instalasi Pasang",
            "Garansi Layanan 1 Bulan"
        ],
        image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "pkt-8",
        name: "Paket 8 Kamera Hilook",
        cameras: 8,
        resolution: "2MP",
        type: "Indoor/Outdoor",
        dvr: "DVR 8 Channel",
        storage: "HDD 1TB (1000GB)",
        cable: "Free Kabel Coaxial & Power 50 meter",
        price: 6350000,
        priceFormatted: "Rp 6.350.000",
        category: "medium",
        features: [
            "8 Kamera 2MP Indoor/Outdoor",
            "DVR 8 Channel Hilook",
            "Penyimpanan HDD 1TB (1000GB)",
            "Free Kabel Coaxial & Power 50m",
            "Free Jasa Instalasi Pasang",
            "Garansi Layanan 1 Bulan"
        ],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "pkt-10",
        name: "Paket 10 Kamera Hilook",
        cameras: 10,
        resolution: "2MP",
        type: "Indoor/Outdoor",
        dvr: "DVR 16 Channel",
        storage: "HDD 1TB (1000GB)",
        cable: "Free Kabel Coaxial & Power 50 meter",
        price: 8050000,
        priceFormatted: "Rp 8.050.000",
        category: "large",
        features: [
            "10 Kamera 2MP Indoor/Outdoor",
            "DVR 16 Channel Hilook",
            "Penyimpanan HDD 1TB (1000GB)",
            "Free Kabel Coaxial & Power 50m",
            "Free Jasa Instalasi Pasang",
            "Garansi Layanan 1 Bulan"
        ],
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "pkt-16",
        name: "Paket 16 Kamera Hilook",
        cameras: 16,
        resolution: "2MP",
        type: "Indoor/Outdoor",
        dvr: "DVR 16 Channel",
        storage: "HDD 2TB (2000GB)",
        cable: "Free Kabel Coaxial & Power 50 meter",
        price: 11950000,
        priceFormatted: "Rp 11.950.000",
        category: "large",
        features: [
            "16 Kamera 2MP Indoor/Outdoor",
            "DVR 16 Channel Hilook",
            "Penyimpanan HDD 2TB (2000GB)",
            "Free Kabel Coaxial & Power 50m",
            "Free Jasa Instalasi Pasang",
            "Garansi Layanan 1 Bulan"
        ],
        image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=800"
    }
];

// 2. DATA AWAL: TESTIMONI PELANGGAN (DENGAN LOCALSTORAGE BACKUP)
const DEFAULT_TESTIMONIALS = [
    {
        id: "testi-1",
        name: "Andi Wijaya",
        role: "Pemilik Ruko Sembako, Tangerang",
        rating: 5,
        text: "Pemasangan rapi sekali. Kabel-kabel dimasukkan ke dalam pipa pelindung, jadi ruko saya kelihatan sangat bersih. Dan beneran gratis biaya instalasi tanpa biaya tambahan! Sangat recommended.",
        date: "2026-06-25",
        isVerified: true
    },
    {
        id: "testi-2",
        name: "Hendra Kusuma",
        role: "Rumah Tinggal, BSD Tangerang",
        rating: 5,
        text: "Paket 4 Kamera Hilook gambarnya jernih luar biasa pas malam hari karena ada teknologi infra-red. Setting online ke HP dibantu sampai selesai oleh teknisi AAA Solusi. Sangat terbantu dan terpercaya.",
        date: "2026-07-02",
        isVerified: true
    },
    {
        id: "testi-3",
        name: "Siti Rahmawati",
        role: "Manajer Operasional Gudang, Cikupa",
        rating: 5,
        text: "Kami pasang Paket 8 Kamera untuk area gudang. Pengerjaannya cepat, tepat waktu, dan respon tim CS nya via WhatsApp sangat ramah dan solutif. Garansi 1 bulan bikin kami tenang.",
        date: "2026-07-09",
        isVerified: true
    }
];

// 3. CHAT SUGGESTIONS UNTUK CHATBOT AI
const CHAT_SUGGESTIONS = [
    "Berapa harga paket 4 kamera?",
    "Apakah pemasangan benar gratis?",
    "Di mana lokasi kantor fisik?",
    "Mengapa harus merk Hilook?",
    "Apakah ada garansi?"
];

// STATE APLIKASI
let cart = [];
let currentFilter = "all";
let activeTestiRating = 5;

// ON DOCUMENT LOAD
document.addEventListener("DOMContentLoaded", () => {
    initApp();
    initNavbar();
    initCatalog();
    initCart();
    initTestimonials();
    initChatbot();
    
    // Initialize Lucide icons on start
    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }
});

// INITIALIZE APP
function initApp() {
    // Load cart from localStorage
    const storedCart = localStorage.getItem("aaa_solusi_cart");
    if (storedCart) {
        try {
            cart = JSON.parse(storedCart);
        } catch (e) {
            cart = [];
        }
    }
    updateCartBadge();
}

// 4. NAVBAR & MENU INTERACTION
function initNavbar() {
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileNavMenu = document.getElementById("mobile-nav-menu");
    const mobileChatBtn = document.getElementById("mobile-chatbot-btn");
    
    if (mobileMenuBtn && mobileNavMenu) {
        mobileMenuBtn.addEventListener("click", () => {
            mobileNavMenu.classList.toggle("hidden");
        });
    }

    // Close mobile nav on link click
    const mobileLinks = mobileNavMenu ? mobileNavMenu.querySelectorAll("a") : [];
    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (mobileNavMenu) mobileNavMenu.classList.add("hidden");
        });
    });

    if (mobileChatBtn) {
        mobileChatBtn.addEventListener("click", () => {
            if (mobileNavMenu) mobileNavMenu.classList.add("hidden");
            openChatbot();
        });
    }
}

// 5. CATALOG ENGINE WITH CAROUSEL SCROLL & FILTERING
function initCatalog() {
    const container = document.getElementById("catalog-container");
    const filterBtns = document.querySelectorAll(".tab-btn");
    const scrollLeftBtn = document.getElementById("scroll-left-btn");
    const scrollRightBtn = document.getElementById("scroll-right-btn");

    // Function to render products
    function renderProducts(filter) {
        if (!container) return;
        container.innerHTML = "";
        
        const filtered = PRODUCTS.filter(p => filter === "all" || p.category === filter);
        
        filtered.forEach(product => {
            const card = document.createElement("div");
            card.className = "flex-shrink-0 w-[290px] sm:w-[350px] snap-start bg-white border border-slate-200/80 rounded-2xl overflow-hidden hover:shadow-xl hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between";
            
            card.innerHTML = `
                <div>
                    <!-- Visual Image Frame -->
                    <div class="relative h-48 sm:h-52 bg-slate-100 overflow-hidden">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover" onerror="this.src='https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=400'" />
                        <!-- Badges -->
                        <div class="absolute top-3 left-3 flex flex-col gap-1">
                            <span class="bg-cyan-500 text-white text-[9px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">HiLook Original</span>
                            <span class="bg-emerald-500 text-white text-[9px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">Free Instalasi</span>
                        </div>
                        <span class="absolute bottom-3 right-3 bg-slate-900/90 text-white text-[10px] font-mono px-2 py-0.5 rounded-md font-semibold">${product.resolution} Res</span>
                    </div>

                    <!-- Package Details -->
                    <div class="p-5 sm:p-6 text-left">
                        <h3 class="text-lg font-extrabold text-slate-950 mb-1 leading-tight">${product.name}</h3>
                        <p class="text-xs text-slate-400 mb-4">${product.cameras} Kamera • ${product.dvr} • ${product.storage}</p>
                        
                        <div class="text-left mb-5">
                            <span class="text-2xl font-extrabold text-slate-950">${product.priceFormatted}</span>
                            <span class="text-[10px] text-slate-400 block mt-0.5">*Sudah termasuk pasang rapi & garansi</span>
                        </div>

                        <!-- Specifications items -->
                        <div class="space-y-2 border-t border-slate-100 pt-4">
                            ${product.features.map(f => `
                                <div class="flex items-start gap-2 text-xs text-slate-600">
                                    <i data-lucide="check" class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"></i>
                                    <span>${f}</span>
                                </div>
                            `).join("")}
                        </div>
                    </div>
                </div>

                <!-- Footer CTA actions -->
                <div class="p-5 sm:p-6 border-t border-slate-100 flex gap-2 bg-slate-50/50">
                    <button class="add-to-cart-btn flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 font-bold text-xs rounded-xl cursor-pointer transition-colors" data-id="${product.id}">
                        + Keranjang
                    </button>
                    <button class="buy-now-btn flex-1 py-2.5 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs rounded-xl cursor-pointer transition-all shadow-md shadow-cyan-500/10" data-id="${product.id}">
                        Pesan Langsung
                    </button>
                </div>
            `;
            container.appendChild(card);
        });

        // Re-init lucide icons on generated elements
        if (typeof lucide !== "undefined") {
            lucide.createIcons();
        }

        // Attach event listeners to buttons
        container.querySelectorAll(".add-to-cart-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const prodId = e.currentTarget.getAttribute("data-id");
                addToCart(prodId);
                showToast("Berhasil ditambahkan ke keranjang!");
            });
        });

        container.querySelectorAll(".buy-now-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const prodId = e.currentTarget.getAttribute("data-id");
                addToCart(prodId);
                openCart();
            });
        });
    }

    // Set active filter tab on button clicks
    filterBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            filterBtns.forEach(b => {
                b.className = "tab-btn px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer shadow-sm bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50";
            });
            
            e.currentTarget.className = "tab-btn px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer shadow-sm bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25";
            
            currentFilter = e.currentTarget.getAttribute("data-filter");
            renderProducts(currentFilter);
        });
    });

    // Carousel buttons scrolling triggers
    if (scrollLeftBtn && container) {
        scrollLeftBtn.addEventListener("click", () => {
            container.scrollBy({ left: -320, behavior: "smooth" });
        });
    }

    if (scrollRightBtn && container) {
        scrollRightBtn.addEventListener("click", () => {
            container.scrollBy({ left: 320, behavior: "smooth" });
        });
    }

    // Render initially with "all"
    renderProducts("all");
}

// 6. SHOPPING CART ENGINE (DRAWER + CALCULATIONS + CHECKOUT WHATSAPP)
function initCart() {
    const overlay = document.getElementById("cart-drawer-overlay");
    const drawer = document.getElementById("cart-drawer");
    const openBtn = document.getElementById("cart-toggle-btn");
    const closeBtn = document.getElementById("cart-close-btn");
    const emptyCta = document.getElementById("cart-empty-cta");
    
    // Checkout inputs
    const checkoutName = document.getElementById("checkout-name");
    const checkoutPhone = document.getElementById("checkout-phone");
    const checkoutAddress = document.getElementById("checkout-address");
    
    // Action buttons
    const whatsappBtn = document.getElementById("checkout-whatsapp-btn");
    const emailBtn = document.getElementById("checkout-email-btn");

    // Toggle drawers
    if (openBtn) openBtn.addEventListener("click", openCart);
    if (closeBtn) closeBtn.addEventListener("click", closeCart);
    if (overlay) overlay.addEventListener("click", closeCart);
    if (emptyCta) emptyCta.addEventListener("click", closeCart);

    // Setup checkout action - WhatsApp
    if (whatsappBtn) {
        whatsappBtn.addEventListener("click", () => {
            const name = checkoutName.value.trim();
            const phone = checkoutPhone.value.trim();
            const address = checkoutAddress.value.trim();

            if (!name || !phone || !address) {
                alert("Mohon lengkapi data Nama, No HP, dan Alamat Pemasangan terlebih dahulu.");
                return;
            }

            // Build WhatsApp order message template
            let messageText = `Halo AAA Solusi CCTV (WhatsApp Order Online):\n\n`;
            messageText += `*INFORMASI PELANGGAN:*\n`;
            messageText += `Nama Penerima: ${name}\n`;
            messageText += `No HP / WhatsApp: ${phone}\n`;
            messageText += `Alamat Instalasi: ${address}\n\n`;
            
            messageText += `*DAFTAR PESANAN CCTV HILOOK:*\n`;
            let subtotal = 0;
            cart.forEach((item, index) => {
                const totalItemPrice = item.price * item.quantity;
                subtotal += totalItemPrice;
                messageText += `${index + 1}. ${item.name} x ${item.quantity} = Rp ${totalItemPrice.toLocaleString("id-ID")}\n`;
            });
            
            messageText += `\n*TOTAL PEMBAYARAN:*\n`;
            messageText += `Subtotal Paket: Rp ${subtotal.toLocaleString("id-ID")}\n`;
            messageText += `Biaya Instalasi Pasang: GRATIS (Rp 0)\n`;
            messageText += `*Total Akhir: Rp ${subtotal.toLocaleString("id-ID")}*\n\n`;
            messageText += `Mohon segera dikonfirmasi jadwal survei dan pemasangan CCTV ke alamat kami. Terima kasih!`;

            const encodedMessage = encodeURIComponent(messageText);
            const waUrl = `https://api.whatsapp.com/send?phone=6285888098639&text=${encodedMessage}`;
            window.open(waUrl, "_blank");
        });
    }

    // Setup checkout action - Email Mailto
    if (emailBtn) {
        emailBtn.addEventListener("click", () => {
            const name = checkoutName.value.trim();
            const phone = checkoutPhone.value.trim();
            const address = checkoutAddress.value.trim();

            if (!name || !phone || !address) {
                alert("Mohon lengkapi data Nama, No HP, dan Alamat Pemasangan terlebih dahulu.");
                return;
            }

            let emailBody = `Halo AAA Solusi CCTV,\n\n`;
            emailBody += `Saya ingin memesan paket CCTV Hilook melalui Website statis. Berikut rinciannya:\n\n`;
            emailBody += `Nama: ${name}\n`;
            emailBody += `No HP: ${phone}\n`;
            emailBody += `Alamat Pemasangan: ${address}\n\n`;
            emailBody += `Rincian Belanja:\n`;
            
            let total = 0;
            cart.forEach((item, index) => {
                const totalItemPrice = item.price * item.quantity;
                total += totalItemPrice;
                emailBody += `- ${item.name} (${item.quantity} Unit) : Rp ${totalItemPrice.toLocaleString("id-ID")}\n`;
            });
            
            emailBody += `\nSubtotal: Rp ${total.toLocaleString("id-ID")}\n`;
            emailBody += `Biaya Pemasangan: Rp 0 (FREE)\n`;
            emailBody += `Total Pembayaran: Rp ${total.toLocaleString("id-ID")}\n\n`;
            emailBody += `Terima kasih. Mohon segera dihubungi untuk koordinasi jadwal pasang.`;

            const subject = encodeURIComponent("Pemesanan Paket CCTV HiLook - AAA Solusi");
            const body = encodeURIComponent(emailBody);
            
            window.location.href = `mailto:aaasolusi@gmail.com?subject=${subject}&body=${body}`;
        });
    }
}

function openCart() {
    const overlay = document.getElementById("cart-drawer-overlay");
    const drawer = document.getElementById("cart-drawer");
    
    if (overlay && drawer) {
        overlay.classList.remove("hidden");
        drawer.classList.remove("translate-x-full");
        renderCartItems();
    }
}

function closeCart() {
    const overlay = document.getElementById("cart-drawer-overlay");
    const drawer = document.getElementById("cart-drawer");
    
    if (overlay && drawer) {
        overlay.classList.add("hidden");
        drawer.classList.add("translate-x-full");
    }
}

function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    // Save & render
    localStorage.setItem("aaa_solusi_cart", JSON.stringify(cart));
    updateCartBadge();
    renderCartItems();
}

function updateCartBadge() {
    const badge = document.getElementById("cart-badge");
    if (!badge) return;

    const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
    if (totalQty > 0) {
        badge.innerText = totalQty;
        badge.classList.remove("hidden");
    } else {
        badge.classList.add("hidden");
    }
}

function renderCartItems() {
    const container = document.getElementById("cart-items-list");
    const checkoutBox = document.getElementById("cart-checkout-box");
    const subtotalLabel = document.getElementById("cart-subtotal-price");
    const totalLabel = document.getElementById("cart-total-price");

    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="text-center py-20 text-slate-400">
                <i data-lucide="shopping-cart" class="w-12 h-12 mx-auto mb-4 stroke-1 text-slate-300"></i>
                <p class="text-sm font-semibold">Keranjang belanja Anda masih kosong</p>
                <button onclick="document.getElementById('cart-close-btn').click();" class="inline-block mt-4 text-xs font-bold text-cyan-600 hover:underline cursor-pointer">Lihat Katalog CCTV</button>
            </div>
        `;
        if (checkoutBox) checkoutBox.classList.add("hidden");
        
        if (typeof lucide !== "undefined") {
            lucide.createIcons();
        }
        return;
    }

    if (checkoutBox) checkoutBox.classList.remove("hidden");

    container.innerHTML = "";
    let subtotal = 0;

    cart.forEach(item => {
        const itemPriceSum = item.price * item.quantity;
        subtotal += itemPriceSum;

        const itemDiv = document.createElement("div");
        itemDiv.className = "flex items-center gap-4 p-4 border border-slate-100 rounded-2xl bg-white shadow-sm text-left relative group";
        
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="w-14 h-14 object-cover rounded-xl border border-slate-100" onerror="this.src='https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=100'" />
            <div class="flex-1">
                <h4 class="text-xs font-extrabold text-slate-900 leading-snug">${item.name}</h4>
                <p class="text-[10px] text-slate-400 mt-0.5">Rp ${item.price.toLocaleString("id-ID")} / unit</p>
                <p class="text-xs font-bold text-slate-800 mt-2">Rp ${itemPriceSum.toLocaleString("id-ID")}</p>
            </div>

            <!-- Quantity Counter controllers -->
            <div class="flex flex-col items-center gap-1.5 shrink-0 bg-slate-50 p-1 rounded-xl border border-slate-200">
                <button class="qty-btn-plus p-1 rounded-md hover:bg-white text-slate-600 cursor-pointer" data-id="${item.id}">
                    <i data-lucide="plus" class="w-3 h-3"></i>
                </button>
                <span class="text-xs font-extrabold text-slate-800 px-1.5">${item.quantity}</span>
                <button class="qty-btn-minus p-1 rounded-md hover:bg-white text-slate-600 cursor-pointer" data-id="${item.id}">
                    <i data-lucide="minus" class="w-3 h-3"></i>
                </button>
            </div>

            <!-- Remove Button -->
            <button class="qty-btn-remove p-2 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors absolute -top-1.5 -right-1.5 cursor-pointer border border-transparent hover:border-red-100 bg-white" data-id="${item.id}">
                <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
            </button>
        `;

        container.appendChild(itemDiv);
    });

    // Update Price labels
    if (subtotalLabel) subtotalLabel.innerText = `Rp ${subtotal.toLocaleString("id-ID")}`;
    if (totalLabel) totalLabel.innerText = `Rp ${subtotal.toLocaleString("id-ID")}`;

    // Re-init lucide icons inside cart items
    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

    // Attach controllers listeners
    container.querySelectorAll(".qty-btn-plus").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = e.currentTarget.getAttribute("data-id");
            changeQty(id, 1);
        });
    });

    container.querySelectorAll(".qty-btn-minus").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = e.currentTarget.getAttribute("data-id");
            changeQty(id, -1);
        });
    });

    container.querySelectorAll(".qty-btn-remove").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = e.currentTarget.getAttribute("data-id");
            removeCartItem(id);
        });
    });
}

function changeQty(productId, amount) {
    const index = cart.findIndex(item => item.id === productId);
    if (index === -1) return;

    cart[index].quantity += amount;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    localStorage.setItem("aaa_solusi_cart", JSON.stringify(cart));
    updateCartBadge();
    renderCartItems();
}

function removeCartItem(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem("aaa_solusi_cart", JSON.stringify(cart));
    updateCartBadge();
    renderCartItems();
}

// 7. TESTIMONIALS MODULE (READ/WRITE & PERSISTENCE)
function initTestimonials() {
    const listContainer = document.getElementById("testimonials-list");
    const countBadge = document.getElementById("testimonials-count");
    
    // Form inputs
    const form = document.getElementById("testimonial-form");
    const successAlert = document.getElementById("testi-success-alert");
    const resetBtn = document.getElementById("reset-testi-btn");
    const inputName = document.getElementById("testi-input-name");
    const inputRole = document.getElementById("testi-input-role");
    const inputText = document.getElementById("testi-input-text");
    const ratingText = document.getElementById("rating-text");
    
    const starBtns = document.querySelectorAll(".star-btn");

    // Load testimonials list combining static data + local user reviews
    function getCombinedTestimonials() {
        const storedReviews = localStorage.getItem("aaa_solusi_user_reviews");
        let userReviews = [];
        if (storedReviews) {
            try {
                userReviews = JSON.parse(storedReviews);
            } catch (e) {
                userReviews = [];
            }
        }
        // User reviews are showing on top for direct visual feedback
        return [...userReviews, ...DEFAULT_TESTIMONIALS];
    }

    // Function to render testimonials
    function renderTestimonials() {
        if (!listContainer) return;
        listContainer.innerHTML = "";

        const allTestimonials = getCombinedTestimonials();
        if (countBadge) countBadge.innerText = `${allTestimonials.length} Testimoni`;

        allTestimonials.forEach(testi => {
            const card = document.createElement("div");
            
            // Highlight pending ulasan yellow border
            const isPending = testi.isVerified === false;
            card.className = `p-6 rounded-2xl border transition-all duration-300 text-left ${
                isPending 
                    ? 'bg-amber-50/50 border-amber-200 shadow-md shadow-amber-50' 
                    : 'bg-white border-slate-200/80 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-slate-100/80'
            }`;

            // Build rating stars
            let starsHtml = "";
            for (let i = 1; i <= 5; i++) {
                const fillClass = i <= testi.rating ? "text-yellow-500 fill-yellow-500" : "text-slate-200";
                starsHtml += `<i data-lucide="star" class="w-4 h-4 ${fillClass}"></i>`;
            }

            card.innerHTML = `
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-700 font-bold font-mono">
                            ${testi.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <h4 class="font-bold text-slate-950 text-sm leading-none">${testi.name}</h4>
                            <p class="text-xs text-slate-500 mt-1">${testi.role || "Pelanggan"}</p>
                        </div>
                    </div>
                    
                    <div class="flex flex-col items-start sm:items-end gap-1">
                        <div class="flex gap-0.5">
                            ${starsHtml}
                        </div>
                        <span class="text-[10px] font-semibold text-slate-400">${testi.date}</span>
                    </div>
                </div>

                <p class="text-slate-700 text-sm leading-relaxed italic">
                    "${testi.text}"
                </p>

                ${isPending ? `
                    <div class="mt-4 flex items-center gap-2 text-xs text-amber-700 font-semibold bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg">
                        <span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping shrink-0"></span>
                        <span>Menunggu Verifikasi (Notifikasi telah dikirim ke Admin)</span>
                    </div>
                ` : ""}
            `;

            listContainer.appendChild(card);
        });

        if (typeof lucide !== "undefined") {
            lucide.createIcons();
        }
    }

    // Interactive Star Rating Selector
    starBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const val = parseInt(e.currentTarget.getAttribute("data-val"));
            activeTestiRating = val;
            
            // Highlight star buttons
            starBtns.forEach(b => {
                const bVal = parseInt(b.getAttribute("data-val"));
                const icon = b.querySelector("i");
                if (bVal <= val) {
                    icon.className = "w-6 h-6 text-yellow-500 fill-yellow-500 filter drop-shadow-[0_0_4px_rgba(234,179,8,0.2)]";
                } else {
                    icon.className = "w-6 h-6 text-slate-200 hover:text-yellow-400";
                }
            });

            if (ratingText) ratingText.innerText = `(${val}/5 Bintang)`;
        });
    });

    let lastSubmittedReview = null;

    // Form submission
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const name = inputName.value.trim();
            const role = inputRole.value.trim();
            const text = inputText.value.trim();
            
            if (!name || !text) return;

            // Generate today's date
            const today = new Date().toISOString().split('T')[0];

            const newReview = {
                id: `user-testi-${Date.now()}`,
                name: name,
                role: role || "Pemilik Ruko / Pelanggan",
                rating: activeTestiRating,
                text: text,
                date: today,
                isVerified: false // Needs verification, displayed with pending alert badge
            };

            lastSubmittedReview = newReview;

            // Save to localStorage list of reviews
            const storedReviews = localStorage.getItem("aaa_solusi_user_reviews");
            let userReviews = [];
            if (storedReviews) {
                try {
                    userReviews = JSON.parse(storedReviews);
                } catch (e) {
                    userReviews = [];
                }
            }
            userReviews.unshift(newReview); // Put newest on top
            localStorage.setItem("aaa_solusi_user_reviews", JSON.stringify(userReviews));

            // Hide form, show success
            form.classList.add("hidden");
            if (successAlert) successAlert.classList.remove("hidden");

            // Re-render
            renderTestimonials();
        });
    }

    // Dynamic verification send handlers for static deployment
    const verifyWaBtn = document.getElementById("testi-verify-wa-btn");
    const verifyEmailBtn = document.getElementById("testi-verify-email-btn");

    if (verifyWaBtn) {
        verifyWaBtn.addEventListener("click", () => {
            if (!lastSubmittedReview) return;
            const r = lastSubmittedReview;
            let stars = "★".repeat(r.rating) + "☆".repeat(5 - r.rating);
            
            let messageText = `Halo Admin AAA Solusi CCTV,\n\nSaya baru saja mengirim ulasan/testimoni pelanggan baru untuk diverifikasi agar dapat tampil di website:\n\n`;
            messageText += `*DETAIL ULASAN PELANGGAN:*\n`;
            messageText += `- Nama: ${r.name}\n`;
            messageText += `- Status: ${r.role}\n`;
            messageText += `- Rating: ${stars} (${r.rating}/5)\n`;
            messageText += `- Tanggal: ${r.date}\n\n`;
            messageText += `*ISI ULASAN:*\n`;
            messageText += `"${r.text}"\n\n`;
            messageText += `Mohon segera verifikasi dan publish ulasan ini secara permanen. Terima kasih!`;

            const encodedMessage = encodeURIComponent(messageText);
            const waUrl = `https://api.whatsapp.com/send?phone=6285888098639&text=${encodedMessage}`;
            window.open(waUrl, "_blank");
        });
    }

    if (verifyEmailBtn) {
        verifyEmailBtn.addEventListener("click", () => {
            if (!lastSubmittedReview) return;
            const r = lastSubmittedReview;
            let stars = "★".repeat(r.rating) + "☆".repeat(5 - r.rating);
            
            let emailBody = `Halo Admin AAA Solusi CCTV,\n\nSaya ingin mengirim ulasan/testimoni pelanggan baru untuk diverifikasi agar dapat tampil di website:\n\n`;
            emailBody += `DETAIL ULASAN PELANGGAN:\n`;
            emailBody += `- Nama: ${r.name}\n`;
            emailBody += `- Status: ${r.role}\n`;
            emailBody += `- Rating: ${stars} (${r.rating}/5)\n`;
            emailBody += `- Tanggal: ${r.date}\n\n`;
            emailBody += `ISI ULASAN:\n`;
            emailBody += `"${r.text}"\n\n`;
            emailBody += `Mohon segera diverifikasi dan ditampilkan di halaman ulasan.\n\nTerima kasih.`;

            const subject = encodeURIComponent(`Verifikasi Ulasan Baru - AAA Solusi (${r.name})`);
            const body = encodeURIComponent(emailBody);
            
            window.location.href = `mailto:aaasolusi@gmail.com?subject=${subject}&body=${body}`;
        });
    }

    // Reset testimonial ulasan form
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            if (form) {
                form.reset();
                form.classList.remove("hidden");
                // Reset active rating to 5 stars
                activeTestiRating = 5;
                starBtns.forEach(b => {
                    b.querySelector("i").className = "w-6 h-6 text-yellow-500 fill-yellow-500";
                });
                if (ratingText) ratingText.innerText = "(5/5 Bintang)";
            }
            if (successAlert) successAlert.classList.add("hidden");
        });
    }

    // Initial load ulasan
    renderTestimonials();
}

// 8. AI AGRET CHATBOT ENGINE (SMART PARSING + LURING EFFECT)
function initChatbot() {
    const overlay = document.getElementById("chat-drawer-overlay");
    const drawer = document.getElementById("chat-drawer");
    const floatingBtn = document.getElementById("floating-chat-btn");
    const openBtn = document.getElementById("chatbot-toggle-btn");
    const closeBtn = document.getElementById("chat-close-btn");
    const heroBtn = document.getElementById("hero-consultation-btn");
    
    // Chat components
    const messagesContainer = document.getElementById("chat-messages");
    const suggestionsContainer = document.getElementById("chat-suggestions");
    const form = document.getElementById("chat-form");
    const input = document.getElementById("chat-input");

    // Toggle drawer actions
    if (floatingBtn) floatingBtn.addEventListener("click", openChatbot);
    if (openBtn) openBtn.addEventListener("click", openChatbot);
    if (closeBtn) closeBtn.addEventListener("click", closeChatbot);
    if (overlay) overlay.addEventListener("click", closeChatbot);
    if (heroBtn) heroBtn.addEventListener("click", openChatbot);

    // Initial chat triggers
    let isInitialized = false;

    function openChatbot() {
        if (overlay && drawer) {
            overlay.classList.remove("hidden");
            drawer.classList.remove("translate-x-full");
            
            if (!isInitialized) {
                initializeChat();
                isInitialized = true;
            }
        }
    }

    function closeChatbot() {
        if (overlay && drawer) {
            overlay.classList.add("hidden");
            drawer.classList.add("translate-x-full");
        }
    }

    function initializeChat() {
        if (!messagesContainer) return;
        messagesContainer.innerHTML = "";
        
        // Initial bot greeting bubble
        addMessage("assistant", "Halo! Selamat datang di AAA Solusi. Saya asisten virtual AI Anda. Ada yang bisa kami bantu hari ini mengenai kebutuhan CCTV HiLook atau jadwal survei lokasi Anda di Tangerang?");
        
        // Populate suggestions
        renderSuggestions();
    }

    function renderSuggestions() {
        if (!suggestionsContainer) return;
        suggestionsContainer.innerHTML = "";

        CHAT_SUGGESTIONS.forEach(sug => {
            const btn = document.createElement("button");
            btn.className = "flex-shrink-0 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-cyan-500/30 text-slate-700 text-xs font-semibold cursor-pointer transition-all whitespace-nowrap";
            btn.innerText = sug;
            btn.addEventListener("click", () => {
                sendUserMessage(sug);
            });
            suggestionsContainer.appendChild(btn);
        });
    }

    function addMessage(sender, text) {
        if (!messagesContainer) return;

        const wrapper = document.createElement("div");
        
        if (sender === "user") {
            wrapper.className = "flex justify-end text-right";
            wrapper.innerHTML = `
                <div class="max-w-[80%] bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-2xl p-3.5 text-xs font-semibold shadow-md shadow-cyan-500/5 leading-relaxed">
                    ${text}
                </div>
            `;
        } else {
            wrapper.className = "flex justify-start text-left items-start gap-2.5";
            wrapper.innerHTML = `
                <div class="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-cyan-600 shrink-0 font-bold text-xs mt-1">
                    AI
                </div>
                <div class="max-w-[78%] bg-white border border-slate-200/80 text-slate-800 rounded-2xl p-3.5 text-xs font-medium shadow-sm leading-relaxed whitespace-pre-line">
                    ${text}
                </div>
            `;
        }

        messagesContainer.appendChild(wrapper);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function showTypingIndicator() {
        if (!messagesContainer) return null;

        const wrapper = document.createElement("div");
        wrapper.id = "chat-typing-indicator";
        wrapper.className = "flex justify-start text-left items-start gap-2.5";
        wrapper.innerHTML = `
            <div class="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-cyan-600 shrink-0 font-bold text-xs mt-1">
                AI
            </div>
            <div class="bg-white border border-slate-200/80 text-slate-800 rounded-2xl px-4 py-3 shadow-sm flex items-center gap-1.5">
                <div class="typing-dots flex gap-1 items-center">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        
        messagesContainer.appendChild(wrapper);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        return wrapper;
    }

    function sendUserMessage(text) {
        addMessage("user", text);
        
        // Show typing indicator
        const indicator = showTypingIndicator();

        // Simulate luring network processing delay (1.2 seconds)
        setTimeout(() => {
            if (indicator) indicator.remove();
            
            // Smart offline parser responder logic
            const reply = getOfflineSmartReply(text);
            addMessage("assistant", reply);
        }, 1200);
    }

    // FORM SUBMISSION EVENT
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const text = input.value.trim();
            if (!text) return;

            input.value = "";
            sendUserMessage(text);
        });
    }
}

// 9. OFFLINE SMART RESPONDER (PORTED SYSTEM RULES FROM EXPRESS BACKEND)
function getOfflineSmartReply(userMessage) {
    const query = userMessage.toLowerCase();

    if (query.includes("halo") || query.includes("hi") || query.includes("pagi") || query.includes("siang") || query.includes("sore") || query.includes("malam")) {
        return "Halo! Selamat datang di AAA Solusi. Saya asisten virtual AI Anda.\n\nKabar gembira! Setiap pembelian paket CCTV HiLook di toko kami sudah mendapatkan *FREE JASA INSTALASI* (Bebas Biaya Pemasangan) dan *GARANSI INSTALASI 1 BULAN*.\n\nAda yang bisa kami bantu hari ini?";
    } 
    
    if (query.includes("alamat") || query.includes("lokasi") || query.includes("dimana") || query.includes("kantor") || query.includes("tangerang")) {
        return "Kantor fisik kami berlokasi di:\n\n*Perumahan Griya Arta Sepatan Blok D5 No. 3, Kab Tangerang, Banten 15330*\n\nKami melayani instalasi pasang gratis di wilayah Tangerang Raya, Kabupaten Tangerang, Tangerang Selatan, hingga wilayah DKI Jakarta.";
    } 
    
    if (query.includes("wa") || query.includes("whatsapp") || query.includes("telepon") || query.includes("nomor") || query.includes("kontak") || query.includes("pesan")) {
        return "Anda dapat menghubungi tim layanan pelanggan kami langsung via WhatsApp di nomor *085888098639*.\n\nAtau Anda dapat memilih paket CCTV kesukaan Anda di halaman website kami, masukkan ke keranjang belanja, lalu klik tombol *Kirim Pesanan via WhatsApp* agar data order terkap secara otomatis!";
    } 
    
    if (query.includes("garansi")) {
        return "Semua paket CCTV yang dipasang oleh AAA Solusi dilengkapi dengan:\n\n1. *Garansi Instalasi & Servis Purna Jual selama 1 Bulan* dari tim teknisi kami.\n2. *Garansi Resmi Unit Hardware CCTV & DVR* (sesuai ketentuan pabrikan HiLook by Hikvision).\n\nKami berkomitmen memastikan sistem keamanan Anda berjalan tanpa gangguan!";
    } 
    
    if (query.includes("ongkir") || query.includes("pemasangan") || query.includes("instalasi") || query.includes("pasang") || query.includes("biaya") || query.includes("gratis")) {
        return "Kabar gembira! Setiap harga paket CCTV yang tertera di website kami sudah bersifat *ALL-IN*, yang artinya:\n\n- *GRATIS BIAYA PEMASANGAN* (Rp 0)\n- *GRATIS BIAYA SETTING ONLINE* agar bisa dipantau lewat Handphone Anda\n- *KABEL COAXIAL & POWER GRATIS hingga 50 METER*\n\nTidak ada biaya siluman atau tambahan pengerjaan standar!";
    } 
    
    if (query.includes("hilook") || query.includes("merk") || query.includes("keunggulan") || query.includes("kamera")) {
        return "Kami menggunakan brand *HiLook* (Sub-brand resmi dari Hikvision, produsen CCTV terbesar di dunia). Keunggulan HiLook antara lain:\n\n- Sensor lensa 2MP berkualitas tinggi, tajam, dan memiliki inframerah super jernih di malam hari.\n- Aplikasi pemantau HP yang sangat stabil dan ringan.\n- Daya tahan unit yang kuat dalam jangka panjang.\n- Memiliki layanan garansi resmi yang terpercaya.";
    } 
    
    if (query.includes("paket") || query.includes("harga") || query.includes("berapa") || query.includes("list") || query.includes("katalog")) {
        if (query.includes("2")) {
            return "Untuk *Paket 2 Kamera Hilook* harganya *Rp 2.750.000*.\n\nSudah lengkap mendapat:\n- 2 Unit Kamera Hilook 2MP\n- 1 Unit DVR 4 Channel\n- Harddisk Penyimpanan 500GB\n- Kabel Coaxial & Power 50 meter\n- Aksesoris pendukung lengkap\n- Gratis Pemasangan & Setting ke HP!";
        } else if (query.includes("4")) {
            return "Untuk *Paket 4 Kamera Hilook* harganya *Rp 3.650.000*.\n\nSudah lengkap mendapat:\n- 4 Unit Kamera Hilook 2MP\n- 1 Unit DVR 4 Channel\n- Harddisk Penyimpanan 500GB\n- Kabel Coaxial & Power 50 meter\n- Aksesoris pendukung lengkap\n- Gratis Pemasangan & Setting ke HP!";
        } else if (query.includes("6")) {
            return "Untuk *Paket 6 Kamera Hilook* harganya *Rp 5.250.000*.\n\nSudah lengkap mendapat:\n- 6 Unit Kamera Hilook 2MP\n- 1 Unit DVR 8 Channel\n- Harddisk Penyimpanan 1TB (1000GB)\n- Kabel Coaxial & Power 50 meter\n- Aksesoris pendukung lengkap\n- Gratis Pemasangan & Setting ke HP!";
        } else if (query.includes("8")) {
            return "Untuk *Paket 8 Kamera Hilook* harganya *Rp 6.350.000*.\n\nSudah lengkap mendapat:\n- 8 Unit Kamera Hilook 2MP\n- 1 Unit DVR 8 Channel\n- Harddisk Penyimpanan 1TB (1000GB)\n- Kabel Coaxial & Power 50 meter\n- Aksesoris pendukung lengkap\n- Gratis Pemasangan & Setting ke HP!";
        } else if (query.includes("10")) {
            return "Untuk *Paket 10 Kamera Hilook* harganya *Rp 8.050.000*.\n\nSudah lengkap mendapat:\n- 10 Unit Kamera Hilook 2MP\n- 1 Unit DVR 16 Channel\n- Harddisk Penyimpanan 1TB (1000GB)\n- Kabel Coaxial & Power 50 meter\n- Aksesoris pendukung lengkap\n- Gratis Pemasangan & Setting ke HP!";
        } else if (query.includes("16")) {
            return "Untuk *Paket 16 Kamera Hilook* harganya *Rp 11.950.000*.\n\nSudah lengkap mendapat:\n- 16 Unit Kamera Hilook 2MP\n- 1 Unit DVR 16 Channel\n- Harddisk Penyimpanan 2TB (2000GB)\n- Kabel Coaxial & Power 50 meter\n- Aksesoris pendukung lengkap\n- Gratis Pemasangan & Setting ke HP!";
        }
        
        return "Kami menyediakan pilihan paket lengkap CCTV Hilook 2MP mulai dari:\n\n1. *Paket 2 Kamera*: Rp 2.750.000\n2. *Paket 4 Kamera*: Rp 3.650.000\n3. *Paket 6 Kamera*: Rp 5.250.000\n4. *Paket 8 Kamera*: Rp 6.350.000\n5. *Paket 10 Kamera*: Rp 8.050.000\n6. *Paket 16 Kamera*: Rp 11.950.000\n\nSemua harga ALL-IN, sudah termasuk Harddisk, kabel lengkap, gratis biaya pasang & garansi! Anda tertarik pada paket berapa kamera?";
    }

    // Default Fallback
    return "Terima kasih atas pertanyaannya! Mengenai detail pemasangan kustom, penawaran resmi perusahaan, atau survei lokasi di luar rincian di atas, Anda dapat berdiskusi langsung dengan tim ahli kami.\n\nSilakan hubungi WhatsApp kami langsung di *085888098639* atau klik tombol Pemesanan dari Keranjang agar kami dapat merespon secara maksimal!";
}

// 10. UTILITY TOAST NOTIFICATION
function showToast(message) {
    // Create toast element
    const toast = document.createElement("div");
    toast.className = "fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white text-xs font-bold py-3.5 px-6 rounded-full shadow-xl shadow-slate-900/10 flex items-center gap-2 animate-fade-in-up border border-slate-800";
    toast.innerHTML = `
        <i data-lucide="check" class="w-4 h-4 text-emerald-500"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(toast);
    
    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

    // Auto remove after 2.5 seconds
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transition = "opacity 0.3s ease";
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}
