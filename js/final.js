// ==========================================
// Pal Store JavaScript Logic (Interactive)
// الطالب: رامز حمودة أبو مصطفى - 1301210135
// ==========================================

// مصفوفة لحفظ عناصر السلة
let cart = [];
let totalAmount = 0;

// 1. دالة إضافة جوال إلى سلة المشتريات
function addToCart(phoneName, price) {
    cart.push({ name: phoneName, price: price });
    totalAmount += price;
    updateCartUI();
    alert(`تمت إضافة ${phoneName} إلى السلة بنجاح!`);
}

// 2. تحديث الواجهة عند تغيير عناصر السلة
function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
    
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';
    
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - ${item.price}$`;
        cartItemsList.appendChild(li);
    });
    
    document.getElementById('cart-total').innerText = totalAmount;
}

// 3. إظهار/إخفاء نافذة السلة
function toggleCartModal() {
    const modal = document.getElementById('cartModal');
    if (modal.style.display === 'none' || modal.style.display === '') {
        modal.style.display = 'block';
    } else {
        modal.style.display = 'none';
    }
}

// 4. تفريغ السلة بالكامل
function clearCart() {
    cart = [];
    totalAmount = 0;
    updateCartUI();
    alert("تم تفريغ السلة!");
}

// 5. البحث الحي السريع (Live Search) عن الهواتف بالاسم
function searchPhones() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.getElementsByClassName('phone-card');

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (title.includes(input)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// 6. فلترة الهواتف حسب العلامة التجارية (Brand Filter)
function filterBrand(brandName) {
    let sections = document.getElementsByClassName('brand-section');
    
    for (let i = 0; i < sections.length; i++) {
        if (brandName === 'all') {
            sections[i].style.display = "block";
        } else {
            if (sections[i].getAttribute('data-brand') === brandName) {
                sections[i].style.display = "block";
            } else {
                sections[i].style.display = "none";
            }
        }
    }
}

// 7. معالجة نموذج الاشتراك في البريد الإلكتروني
function handleSubscribe(event) {
    event.preventDefault();
    let email = document.getElementById('subEmail').value;
    alert(`شكراً لاشتراكك معنا بريد: ${email}`);
    document.getElementById('subEmail').value = '';
}