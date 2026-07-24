// ไอคอน SVG ที่ใช้ซ้ำ
const iconCheck = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-white"><polyline points="20 6 9 17 4 12"/></svg>`;

// ข้อมูลของแต่ละเพจ (จำลอง Component ของ React เป็น String Template)
const pagesData = [
  {
    title: "หน้าปก",
    content: `
      <div class="flex flex-col items-center justify-center min-h-full text-center p-6 bg-gradient-to-br from-[#001A36] to-[#002855] text-white rounded-2xl shadow-2xl relative overflow-hidden h-full">
        <div class="absolute top-0 left-0 w-full h-full opacity-10" style="background-image: radial-gradient(#D4AF37 1px, transparent 1px); background-size: 20px 20px;"></div>
        <div class="relative z-10 space-y-6 max-w-3xl w-full py-12 flex flex-col items-center justify-center">
          <div class="w-24 h-24 mx-auto bg-[#D4AF37] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.4)] mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#002855" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          </div>
          <h1 class="text-5xl md:text-6xl font-bold tracking-tight">Working the <span class="text-[#D4AF37]">CP</span> Way</h1>
          <h2 class="text-2xl md:text-3xl font-light opacity-90 mt-4">Learn CP. Work Right. Grow Together.</h2>
          <div class="h-1 w-24 bg-[#D4AF37] mx-auto my-6 rounded-full"></div>
          <p class="text-lg md:text-xl max-w-xl mx-auto text-gray-300">
            เริ่มต้นทำงานในแบบ CP: รู้จักองค์กร ทำงานให้ถูกทาง และเติบโตไปด้วยกัน
          </p>
        </div>
      </div>
    `
  },
  {
    title: "ยินดีต้อนรับสู่ CP!",
    content: `
      <div class="page-content space-y-6">
        <h2 class="text-3xl font-bold text-[#002855] border-b-2 border-[#D4AF37] pb-4">
          <span class="text-3xl mr-2">🎉</span> ยินดีต้อนรับสู่ CP!
        </h2>
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p class="text-gray-700 text-base leading-relaxed mb-4">
            การเริ่มงานใหม่มีเรื่องให้เรียนรู้เต็มไปหมด แต่สบายใจได้เลย คุณไม่จำเป็นต้องจำทุกอย่างให้ได้ตั้งแต่วันแรก สิ่งสำคัญที่สุดในตอนนี้คือการรู้ว่า <strong>CP คือใคร? เรายึดถืออะไร? เราทำงานกันอย่างไร? เรื่องไหนที่ต้องระวัง?</strong> และถ้าไม่แน่ใจ... เราจะหันไปถามใครได้บ้าง?
          </p>
          <p class="text-gray-700 text-base leading-relaxed">
            หน้านี้ถูกสร้างขึ้นมาเพื่อเป็น <strong>"จุดเริ่มต้น"</strong> สำหรับพนักงานใหม่ทุกคน เพื่อช่วยให้คุณเข้าใจวิธีคิด วิธีทำงาน และการตัดสินใจในแบบฉบับของชาว CP ครับ
          </p>
        </div>
        <div class="bg-[#001A36] p-6 rounded-xl text-white shadow-md mt-6 border border-[#002855]">
          <h3 class="font-bold text-[#D4AF37] text-lg mb-4 flex items-center gap-2">
            <span class="text-2xl">💡</span> ควรรู้ก่อนเริ่ม: หน้านี้ใช้ทำอะไร?
          </h3>
          <p class="text-sm text-gray-300 mb-5 leading-relaxed bg-white/5 p-4 rounded-lg">
            <strong>Working the CP Way</strong> ไม่ใช่คู่มือ HR และไม่ได้สร้างมาเพื่อใช้แทน Employee Handbook ของแต่ละบริษัทนะครับ หากคุณมีคำถามเรื่องเงื่อนไขการจ้างงาน เวลาทำงาน วันลา สวัสดิการ เงินเดือน หรือระบบ HR ขอให้แวะไปเช็กข้อมูลจาก HR / People Portal / Employee Handbook ของบริษัทที่คุณสังกัดโดยตรงได้เลยครับ
          </p>
          <p class="text-base text-white font-medium mb-4">เข็มทิศหน้านี้จะช่วยคุณใน 3 เรื่องหลัก:</p>
          <ul class="text-sm text-gray-200 space-y-4">
            <li class="flex gap-3 items-start"><span class="text-[#D4AF37] font-bold text-lg leading-none mt-0.5">1.</span> <span><strong class="text-[#D4AF37]">Learn CP:</strong> รู้จักองค์กรของเรา สิ่งที่เรายึดถือ และบทบาทของคุณ</span></li>
            <li class="flex gap-3 items-start"><span class="text-[#D4AF37] font-bold text-lg leading-none mt-0.5">2.</span> <span><strong class="text-[#D4AF37]">Work Right:</strong> เข้าใจวิธีทำงานให้ถูกทาง ตัดสินใจอย่างรับผิดชอบ และรู้ว่าตอนไหนควรหยุดถาม</span></li>
            <li class="flex gap-3 items-start"><span class="text-[#D4AF37] font-bold text-lg leading-none mt-0.5">3.</span> <span><strong class="text-[#D4AF37]">Grow Together:</strong> รู้ว่าควรไปเรียนรู้ต่อที่ไหน ขอความช่วยเหลืออย่างไร เพื่อเติบโตไปพร้อมกับทีม</span></li>
          </ul>
        </div>
      </div>
    `
  },
  {
    title: "1. Learn CP",
    content: `
      <div class="page-content space-y-6">
        <h2 class="text-3xl font-bold text-[#002855] border-b-2 border-[#D4AF37] pb-4">
          <span class="text-3xl mr-2">🧭</span> 1. Learn CP (รู้จัก CP และสิ่งที่เรายึดถือ)
        </h2>
        <p class="text-gray-700 leading-relaxed">รู้ไหมครับว่า CP เติบโตเคียงข้างประเทศไทยและสังคมมานานกว่าศตวรรษแล้ว! จากจุดเริ่มต้นเล็กๆ วันนี้เราก้าวสู่การเป็นเครือธุรกิจที่มีบทบาทในหลายอุตสาหกรรม ทั้งอาหาร การค้า เทคโนโลยี การสื่อสาร สุขภาพ คุณภาพชีวิต ไปจนถึงการสร้างโอกาสทางเศรษฐกิจ ไม่ว่าคุณจะอยู่สายงานไหน ขอให้รู้ไว้ว่างานของคุณมีส่วนช่วยให้องค์กรเดินหน้า และกำลังสร้างผลลัพธ์ที่ดีให้กับผู้คน สังคม และประเทศชาติครับ</p>
        
        <div class="bg-[#002855] text-white p-6 rounded-xl shadow-md">
          <h3 class="text-lg font-bold text-[#D4AF37] mb-4 flex items-center gap-2"><span>✨</span> สิ่งที่เราอยากให้คุณจำไว้ตั้งแต่วันแรก:</h3>
          <ul class="space-y-3">
            <li class="flex gap-3 items-start"><div class="bg-[#D4AF37] rounded-full p-0.5 mt-1 shrink-0">${iconCheck}</div><div class="text-sm"><strong>คุณไม่ได้เริ่มต้นคนเดียว:</strong> คุณมีหัวหน้า ทีมงาน และหน่วยงานสนับสนุนที่พร้อมช่วยเหลือคุณเสมอ</div></li>
            <li class="flex gap-3 items-start"><div class="bg-[#D4AF37] rounded-full p-0.5 mt-1 shrink-0">${iconCheck}</div><div class="text-sm"><strong>ไม่ต้องรู้ทุกเรื่องทันที:</strong> ไม่เป็นไรเลยถ้ายังไม่รู้ แต่ขอให้รู้ว่า "จะหาคำตอบได้จากที่ไหน"</div></li>
            <li class="flex gap-3 items-start"><div class="bg-[#D4AF37] rounded-full p-0.5 mt-1 shrink-0">${iconCheck}</div><div class="text-sm"><strong>ทำงานแบบ CP:</strong> การทำงานที่ดีที่ CP คือการทำงานให้สำเร็จ ด้วยวิธีที่ถูกต้องและมีความรับผิดชอบ</div></li>
          </ul>
        </div>
      </div>
    `
  },
  {
    title: "2. Understand How We Work",
    content: `
      <div class="page-content space-y-6">
        <h2 class="text-3xl font-bold text-[#002855] border-b-2 border-[#D4AF37] pb-4">
          <span class="text-3xl mr-2">⚙️</span> 2. Understand How We Work
        </h2>
        <p class="text-[#002855] font-bold">เข้าใจภาพรวมการทำงานในเครือ CP</p>
        <p class="text-gray-700 text-sm leading-relaxed">CP เป็นเครือธุรกิจขนาดใหญ่ที่มีธุรกิจหลากหลายมาก แต่ละกลุ่มธุรกิจก็อาจจะมีลูกค้า สินค้า ระบบ และวิธีการทำงานที่แตกต่างกันออกไป...</p>
        <div class="mt-6">
          <h3 class="text-xl font-bold text-[#002855] mb-3">การทำงานในแบบ CP หมายถึงอะไร?</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="flex gap-3 bg-white p-3 rounded-lg shadow-sm border border-gray-100 items-start"><div class="w-6 h-6 shrink-0 bg-[#D4AF37] text-[#002855] rounded-full flex items-center justify-center font-bold text-xs">1</div><span class="text-xs text-gray-700 mt-0.5 leading-relaxed">เข้าใจเป้าหมายของงานให้ชัดเจนก่อนลงมือทำ</span></div>
            <div class="flex gap-3 bg-white p-3 rounded-lg shadow-sm border border-gray-100 items-start"><div class="w-6 h-6 shrink-0 bg-[#D4AF37] text-[#002855] rounded-full flex items-center justify-center font-bold text-xs">2</div><span class="text-xs text-gray-700 mt-0.5 leading-relaxed">มองให้ออกว่างานของเราจะไปกระทบต่อทีม และผู้เกี่ยวข้อง</span></div>
          </div>
        </div>
      </div>
    ` // ตัดย่อข้อความในตัวอย่างโค้ดลงเพื่อประหยัดพื้นที่ แต่โครงสร้างจะเหมือนกับข้อความของเก่าทุกประการ
  },
  // ** สามารถใส่ content ของหน้า 3 ถึง 9 ในรูปแบบเดียวกัน **
  {
    title: "Checklist & Closing",
    content: `
      <div class="page-content space-y-6 flex flex-col h-full">
        <h2 class="text-2xl font-bold text-[#002855] border-b-2 border-[#D4AF37] pb-4 flex items-center gap-2">
          <span>✅</span> Working the CP Way Checklist
        </h2>
        <p class="text-gray-700 text-sm font-medium">เช็กตัวเองง่ายๆ ในช่วงเริ่มงาน ก่อนไปลุยงาน ลองลิสต์เช็กตัวเองตามนี้ดูนะครับ:</p>

        <div class="w-full bg-gray-200 rounded-full h-3 mb-1 overflow-hidden">
          <div id="progress-bar-fill" class="bg-[#D4AF37] h-3 rounded-full transition-all duration-500" style="width: 0%"></div>
        </div>
        <div id="progress-text" class="text-right text-xs font-bold text-[#002855] mb-4">0% Complete</div>

        <div id="checklist-container" class="flex-1 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
          <!-- เช็คลิสต์สร้างจาก JS -->
        </div>

        <div class="bg-gradient-to-r from-[#002855] to-[#004080] p-6 rounded-xl text-white text-center shadow-lg mt-auto shrink-0 border border-[#002855]">
          <h3 class="font-bold text-xl mb-3 text-[#D4AF37]">ข้อความปิดท้ายจากเรา 💙</h3>
          <p class="text-sm opacity-95 leading-relaxed">
            ย้ำอีกครั้งว่า คุณไม่จำเป็นต้องรู้ทุกอย่างตั้งแต่วันแรกครับ สิ่งสำคัญที่สุดคือการ <strong class="text-[#D4AF37]">"เปิดใจเรียนรู้ กล้าถามเมื่อไม่แน่ใจ ทำงานให้ถูกทาง และพร้อมที่จะเติบโตไปกับทีม"</strong><br><br>ยินดีต้อนรับสู่ CP ครับ... เราพร้อมเริ่มต้นไปด้วยกัน!
          </p>
        </div>
      </div>
    `
  }
];

// รายการคำถาม Checklist สำหรับหน้าสุดท้าย
const checklistItems = [
  "ฉันเข้าใจบทบาทของตัวเองและความคาดหวังจากหัวหน้าแล้วหรือยัง?",
  "ฉันรู้จักทีมและคนที่ต้องประสานงานหลักแล้วหรือยัง?",
  "ฉันรู้ว่างานของฉันเชื่อมโยงกับเป้าหมายของทีมและองค์กรอย่างไร?",
  "ฉันรู้ว่าต้องใช้ระบบใดบ้างในการทำงานประจำวัน?",
  "ฉันรู้ว่าจะหันไปถามใครเมื่อเกิดความไม่แน่ใจ?",
  "ฉันอ่าน Code of Conduct และนโยบายสำคัญที่เกี่ยวข้องกับงานแล้วหรือยัง?",
  "ฉันรู้ว่าหากไม่แน่ใจเรื่องของขวัญ ข้อมูล หรือผลประโยชน์ขัดกัน ฉันควรถามใคร?",
  "ฉันรู้ช่องทางแจ้งข้อกังวล หรือช่องทาง Speak Up แล้วหรือยัง?",
  "ฉันรู้ว่าตัวเองต้องเรียนหลักสูตรพื้นฐานหรือหลักสูตรบังคับตัวไหนบ้าง?",
  "ฉันได้ลองขอ Feedback จากหัวหน้าเกี่ยวกับการเริ่มงานดูแล้วหรือยัง?"
];

// สถานะการทำงาน
let currentPage = 0;
let sidebarOpen = false;

// 1. ฟังก์ชันสลับหน้าและอนิเมชัน
function renderPage(idx) {
  currentPage = idx;
  const container = document.getElementById('content-container');
  const wrapper = document.getElementById('page-wrapper');
  
  // สร้าง Effect กระพริบแบบ Fade-in
  wrapper.classList.remove('animate-fade-in-up');
  void wrapper.offsetWidth; // Trigger DOM Reflow
  wrapper.classList.add('animate-fade-in-up');

  // ใส่เนื้อหา HTML
  container.innerHTML = pagesData[idx].content;

  // หากเป็นหน้า Checklist ให้เรนเดอร์กล่อง Checkbox ด้วย
  if(idx === pagesData.length - 1) {
    renderChecklist();
  }

  updateControls();
  renderSidebarMenu();
}

// 2. ควบคุมปุ่ม ก่อนหน้า/ถัดไป
function handleNext() {
  if (currentPage < pagesData.length - 1) renderPage(currentPage + 1);
}
function handlePrev() {
  if (currentPage > 0) renderPage(currentPage - 1);
}

// อัปเดตสถานะปุ่มและตัวเลขหน้า
function updateControls() {
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  document.getElementById('page-indicator').innerText = `หน้า ${currentPage + 1} / ${pagesData.length}`;

  if (currentPage === 0) {
    btnPrev.disabled = true;
    btnPrev.className = "flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-colors text-gray-400 cursor-not-allowed";
  } else {
    btnPrev.disabled = false;
    btnPrev.className = "flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-colors text-[#002855] hover:bg-blue-50 cursor-pointer";
  }

  if (currentPage === pagesData.length - 1) {
    btnNext.disabled = true;
    btnNext.className = "flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-colors text-gray-400 cursor-not-allowed";
  } else {
    btnNext.disabled = false;
    btnNext.className = "flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-colors text-white bg-[#002855] hover:bg-[#001A36] shadow-md cursor-pointer";
  }
}

// 3. ฟังก์ชันเรนเดอร์เมนู Sidebar
function renderSidebarMenu() {
  const menuContainer = document.getElementById('sidebar-menu');
  // เก็บ Header ของเมนูไว้ก่อนเคลียร์
  const header = `<div class="text-xs font-bold text-gray-400 mb-3 px-2 uppercase tracking-wider">Table of Contents</div>`;
  
  let menuHtml = header;
  pagesData.forEach((page, idx) => {
    const isActive = currentPage === idx;
    const activeClasses = isActive 
      ? 'bg-[#D4AF37] text-[#001A36] font-bold shadow-md' 
      : 'text-gray-300 hover:bg-white/10 hover:text-white';
    const icon = idx === 0 ? '🏠' : `${idx}.`;

    menuHtml += `
      <button onclick="goToPage(${idx})" class="w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-200 ${activeClasses}">
        <span class="mr-2 opacity-70">${icon}</span> ${page.title}
      </button>
    `;
  });
  
  menuContainer.innerHTML = menuHtml;
}

// กดเมนูเปลี่ยนหน้าและปิด Sidebar
function goToPage(idx) {
  renderPage(idx);
  if(sidebarOpen) toggleSidebar();
}

// 4. ฟังก์ชันเปิด-ปิด Sidebar (Mobile)
function toggleSidebar() {
  sidebarOpen = !sidebarOpen;
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  
  if(sidebarOpen) {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
  } else {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
  }
}

// 5. ระบบ Checklist สำหรับหน้าสุดท้าย (แทนที่ useState ของ React)
let checkStates = Array(10).fill(false);

function renderChecklist() {
  const container = document.getElementById('checklist-container');
  let html = '';
  
  checklistItems.forEach((item, idx) => {
    const isChecked = checkStates[idx];
    const bgClass = isChecked ? 'bg-blue-50 border-[#002855]' : 'bg-white border-gray-200 hover:bg-gray-50';
    const textClass = isChecked ? 'text-[#002855] font-bold' : 'text-gray-700';
    
    html += `
      <label class="flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-colors shadow-sm ${bgClass}">
        <input type="checkbox" onchange="toggleCheckItem(${idx})" class="w-5 h-5 mt-0.5 accent-[#002855] rounded border-gray-300 cursor-pointer shrink-0" ${isChecked ? 'checked' : ''}>
        <span class="text-sm ${textClass}">${item}</span>
      </label>
    `;
  });
  
  container.innerHTML = html;
  updateProgress();
}

function toggleCheckItem(idx) {
  checkStates[idx] = !checkStates[idx];
  renderChecklist();
}

function updateProgress() {
  const checkedCount = checkStates.filter(Boolean).length;
  const progress = Math.round((checkedCount / checkStates.length) * 100);
  
  document.getElementById('progress-bar-fill').style.width = `${progress}%`;
  document.getElementById('progress-text').innerText = `${progress}% Complete`;
}

// Initialize หน้าแรกทันทีเมื่อโหลดเสร็จ
window.onload = () => {
  renderPage(0);
};