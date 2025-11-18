        const myPhoneNumber = "994103891914"; 
        document.getElementById('display-phone').innerText = "+" + myPhoneNumber;

        const product = {

            title: "ULTRA KOMBO DƏST (7-si 1-də)", 
            

            price: "150 AZN",

            desc: "Avtomobiliniz üçün tam premium təchizat paketi. Hər bir detal xüsusi keyfiyyətlə seçilmişdir.",

            itemsList: [
                "Kamera 3 birinin içində: Qabaq, Arxa, Salon (Full HD!)",
                "Motorun çöl təmizləyicisi",
                "Sit təmizləyici",
                "Köpük çiləyici",
                "5 litr köpük",
                "Schratch Remover Flamingo (Cızıq silmək üçün)",
            ],


            images: [
                "WhatsApp Image 2025-11-18 at 20.58.47 (1).jpeg", 
                "WhatsApp Image 2025-11-18 at 21.29.17.jpeg", 
                "Screenshot 2025-11-18 221900.png", 
                "Screenshot 2025-11-18 221925.png", 
                "Screenshot 2025-11-18 221942.png",
                "WhatsApp Image 2025-11-18 at 21.29.17 (4).jpeg",    
                "WhatsApp Image 2025-11-18 at 21.29.17 (5).jpeg"   
            ]
        };



        const container = document.getElementById('product-container');


        let itemsHtml = '<ul class="items-list">';
        product.itemsList.forEach(item => {
            itemsHtml += `<li>${item}</li>`;
        });
        itemsHtml += '</ul>';

        let carouselItems = '';
        product.images.forEach((imgUrl, index) => {
            const isActive = index === 0 ? 'active' : '';
            carouselItems += `
                <div class="carousel-item ${isActive}" style="height: 280px;">
                    <img src="${imgUrl}" class="d-block w-100" alt="Slide ${index + 1}">
                </div>
            `;
        });

        const cardHtml = `
            <div class="product-card">
                <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        ${carouselItems}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p style="text-align: center; color: #b0b0b0;">${product.desc}</p>
                    
                    ${itemsHtml}

                    <div class="price-row">
                        <span class="price">${product.price}</span>
                        <button class="buy-btn" onclick="orderItem('${product.title}', '${product.price}')">Sifariş et</button>
                    </div>
                </div>
            </div>
        `;

        container.innerHTML = cardHtml;


        function orderItem(title, price) {
            const text = `Salam! Mən sifariş etmək istəyirəm: ${title} (${price}). Çatdırılma varmı?`;
            const waUrl = `https://wa.me/${myPhoneNumber}?text=${encodeURIComponent(text)}`;
            window.open(waUrl, '_blank');
        }