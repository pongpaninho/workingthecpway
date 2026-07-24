import React, { useState, useEffect } from 'react';

const COLORS = {
  cpblue: '#002855',
  cpdark: '#001A36',
  cpgold: '#D4AF37',
  cplight: '#F4F7FA',
};

// Reusable Icon Components (SVG)
const IconChevronLeft = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>;
const IconChevronRight = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>;
const IconMenu = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>;
const IconCheck = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="20 6 9 17 4 12"/></svg>;

const CoverPage = () => (
  <div className="flex flex-col items-center justify-center min-h-full text-center p-6 bg-gradient-to-br from-[#001A36] to-[#002855] text-white rounded-2xl shadow-2xl relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
    <div className="relative z-10 space-y-6 max-w-3xl w-full py-12 flex flex-col items-center justify-center">
      <div className="w-24 h-24 mx-auto bg-[#D4AF37] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.4)] mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#002855" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
      </div>
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Working the <span className="text-[#D4AF37]">CP</span> Way</h1>
      <h2 className="text-2xl md:text-3xl font-light opacity-90 mt-4">Learn CP. Work Right. Grow Together.</h2>
      <div className="h-1 w-24 bg-[#D4AF37] mx-auto my-6 rounded-full"></div>
      <p className="text-lg md:text-xl max-w-xl mx-auto text-gray-300">
        เริ่มต้นทำงานในแบบ CP: รู้จักองค์กร ทำงานให้ถูกทาง และเติบโตไปด้วยกัน
      </p>
    </div>
  </div>
);

const WelcomePage = () => (
  <div className="page-content space-y-6">
    <h2 className="text-3xl font-bold text-[#002855] border-b-2 border-[#D4AF37] pb-4">
      <span className="text-3xl mr-2">🎉</span> ยินดีต้อนรับสู่ CP!
    </h2>
    
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <p className="text-gray-700 text-base leading-relaxed mb-4">
        การเริ่มงานใหม่มีเรื่องให้เรียนรู้เต็มไปหมด แต่สบายใจได้เลย คุณไม่จำเป็นต้องจำทุกอย่างให้ได้ตั้งแต่วันแรก สิ่งสำคัญที่สุดในตอนนี้คือการรู้ว่า <strong>CP คือใคร? เรายึดถืออะไร? เราทำงานกันอย่างไร? เรื่องไหนที่ต้องระวัง?</strong> และถ้าไม่แน่ใจ... เราจะหันไปถามใครได้บ้าง?
      </p>
      <p className="text-gray-700 text-base leading-relaxed">
        หน้านี้ถูกสร้างขึ้นมาเพื่อเป็น <strong>"จุดเริ่มต้น"</strong> สำหรับพนักงานใหม่ทุกคน เพื่อช่วยให้คุณเข้าใจวิธีคิด วิธีทำงาน และการตัดสินใจในแบบฉบับของชาว CP ครับ
      </p>
    </div>
    
    <div className="bg-[#001A36] p-6 rounded-xl text-white shadow-md mt-6 border border-[#002855]">
      <h3 className="font-bold text-[#D4AF37] text-lg mb-4 flex items-center gap-2">
        <span className="text-2xl">💡</span> ควรรู้ก่อนเริ่ม: หน้านี้ใช้ทำอะไร?
      </h3>
      <p className="text-sm text-gray-300 mb-5 leading-relaxed bg-white/5 p-4 rounded-lg">
        <strong>Working the CP Way</strong> ไม่ใช่คู่มือ HR และไม่ได้สร้างมาเพื่อใช้แทน Employee Handbook ของแต่ละบริษัทนะครับ หากคุณมีคำถามเรื่องเงื่อนไขการจ้างงาน เวลาทำงาน วันลา สวัสดิการ เงินเดือน หรือระบบ HR ขอให้แวะไปเช็กข้อมูลจาก HR / People Portal / Employee Handbook ของบริษัทที่คุณสังกัดโดยตรงได้เลยครับ
      </p>
      
      <p className="text-base text-white font-medium mb-4">เข็มทิศหน้านี้จะช่วยคุณใน 3 เรื่องหลัก:</p>
      <ul className="text-sm text-gray-200 space-y-4">
        <li className="flex gap-3 items-start">
          <span className="text-[#D4AF37] font-bold text-lg leading-none mt-0.5">1.</span> 
          <span><strong className="text-[#D4AF37]">Learn CP:</strong> รู้จักองค์กรของเรา สิ่งที่เรายึดถือ และบทบาทของคุณ</span>
        </li>
        <li className="flex gap-3 items-start">
          <span className="text-[#D4AF37] font-bold text-lg leading-none mt-0.5">2.</span> 
          <span><strong className="text-[#D4AF37]">Work Right:</strong> เข้าใจวิธีทำงานให้ถูกทาง ตัดสินใจอย่างรับผิดชอบ และรู้ว่าตอนไหนควรหยุดถาม</span>
        </li>
        <li className="flex gap-3 items-start">
          <span className="text-[#D4AF37] font-bold text-lg leading-none mt-0.5">3.</span> 
          <span><strong className="text-[#D4AF37]">Grow Together:</strong> รู้ว่าควรไปเรียนรู้ต่อที่ไหน ขอความช่วยเหลืออย่างไร เพื่อเติบโตไปพร้อมกับทีม</span>
        </li>
      </ul>
    </div>
  </div>
);

const Page2 = () => (
  <div className="page-content space-y-6">
    <h2 className="text-3xl font-bold text-[#002855] border-b-2 border-[#D4AF37] pb-4">
      <span className="text-3xl mr-2">🧭</span> 1. Learn CP (รู้จัก CP และสิ่งที่เรายึดถือ)
    </h2>
    <p className="text-gray-700 leading-relaxed">
      รู้ไหมครับว่า CP เติบโตเคียงข้างประเทศไทยและสังคมมานานกว่าศตวรรษแล้ว! จากจุดเริ่มต้นเล็กๆ วันนี้เราก้าวสู่การเป็นเครือธุรกิจที่มีบทบาทในหลายอุตสาหกรรม ทั้งอาหาร การค้า เทคโนโลยี การสื่อสาร สุขภาพ คุณภาพชีวิต ไปจนถึงการสร้างโอกาสทางเศรษฐกิจ ไม่ว่าคุณจะอยู่สายงานไหน ขอให้รู้ไว้ว่างานของคุณมีส่วนช่วยให้องค์กรเดินหน้า และกำลังสร้างผลลัพธ์ที่ดีให้กับผู้คน สังคม และประเทศชาติครับ
    </p>
    
    <div className="bg-[#002855] text-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-bold text-[#D4AF37] mb-4 flex items-center gap-2"><span>✨</span> สิ่งที่เราอยากให้คุณจำไว้ตั้งแต่วันแรก:</h3>
      <ul className="space-y-3">
        <li className="flex gap-3 items-start">
          <div className="bg-[#D4AF37] rounded-full p-0.5 mt-1 shrink-0"><IconCheck /></div>
          <div className="text-sm"><strong>คุณไม่ได้เริ่มต้นคนเดียว:</strong> คุณมีหัวหน้า ทีมงาน และหน่วยงานสนับสนุนที่พร้อมช่วยเหลือคุณเสมอ</div>
        </li>
        <li className="flex gap-3 items-start">
          <div className="bg-[#D4AF37] rounded-full p-0.5 mt-1 shrink-0"><IconCheck /></div>
          <div className="text-sm"><strong>ไม่ต้องรู้ทุกเรื่องทันที:</strong> ไม่เป็นไรเลยถ้ายังไม่รู้ แต่ขอให้รู้ว่า "จะหาคำตอบได้จากที่ไหน"</div>
        </li>
        <li className="flex gap-3 items-start">
          <div className="bg-[#D4AF37] rounded-full p-0.5 mt-1 shrink-0"><IconCheck /></div>
          <div className="text-sm"><strong>ทำงานแบบ CP:</strong> การทำงานที่ดีที่ CP คือการทำงานให้สำเร็จ ด้วยวิธีที่ถูกต้องและมีความรับผิดชอบ</div>
        </li>
      </ul>
    </div>

    <div className="mt-6 border border-gray-200 p-6 rounded-xl bg-white shadow-sm">
      <h3 className="text-xl font-bold text-[#002855] mb-3">สิ่งที่คน CP ยึดถือ</h3>
      <p className="text-gray-700 text-sm mb-5 leading-relaxed">
        รากฐานสำคัญในใจคน CP มีอยู่ 2 เรื่อง คือ <strong>ความกตัญญู</strong> (ไม่ลืมผู้ที่มีส่วนทำให้องค์กรเติบโต) และ <strong>ความเมตตา</strong> (คำนึงถึงผลกระทบจากการตัดสินใจของเราที่มีต่อผู้อื่น สังคม และสิ่งแวดล้อม)<br/><br/>
        จากรากฐาน 2 เรื่องนี้ สะท้อนออกมาเป็น <strong>ค่านิยมองค์กร 6 ประการ (6 Core Values)</strong> ที่เราใช้เป็นเข็มทิศในการทำงานและการตัดสินใจทุกๆ วัน:
      </p>
      <div className="grid md:grid-cols-2 gap-3">
        {[
          { title: 'สามประโยชน์', desc: 'คิดถึงประเทศ ประชาชน และองค์กร (ตามลำดับ)' },
          { title: 'ทำเร็วและมีคุณภาพ', desc: 'เดินหน้าให้ทันสถานการณ์ แต่ต้องพร้อมรักษามาตรฐานไว้ด้วย' },
          { title: 'ทำเรื่องยากให้เป็นเรื่องง่าย', desc: 'ลดความซับซ้อน เพื่อช่วยให้งานเดินต่อได้ไวขึ้น' },
          { title: 'ยอมรับการเปลี่ยนแปลง', desc: 'เปิดใจกว้างๆ เรียนรู้ และพร้อมปรับตัว' },
          { title: 'สร้างสรรค์สิ่งใหม่', desc: 'กล้าคิด กล้าลอง และมองหาวิธีที่ดีกว่าเดิมเสมอ' },
          { title: 'คุณธรรมและความซื่อสัตย์', desc: 'ทำสิ่งที่ถูกต้อง แม้ในตอนที่ไม่มีใครเห็น' }
        ].map((val, idx) => (
          <div key={idx} className="flex gap-3 items-start p-3 bg-gray-50 rounded-lg border-l-4 border-[#D4AF37]">
            <span className="font-bold text-[#D4AF37]">{idx + 1}.</span>
            <div>
              <strong className="text-[#002855] block text-sm">{val.title}</strong>
              <span className="text-xs text-gray-600">{val.desc}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#D4AF37]/10 p-4 rounded-lg border border-[#D4AF37]/30 mt-5">
        <p className="text-sm text-[#002855]"><strong>📌 สรุปง่ายๆ คือ:</strong> เราไม่ลืมว่าเราเติบโตมาได้เพราะใคร เราไม่ลืมว่างานของเราจะไปกระทบใคร และเราใช้ค่านิยมเหล่านี้เป็นเข็มทิศนำทางในการทำงานทุกวัน</p>
      </div>
    </div>

    <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm mt-6">
      <h4 className="font-bold text-[#002855] mb-3 text-sm flex items-center gap-2"><span>🔗</span> เริ่มจากลิงก์ไหนดี?</h4>
      <ul className="space-y-3 text-sm">
        <li className="flex items-start gap-2">
          <span className="text-[#D4AF37]">•</span> 
          <div><strong>อยากเข้าใจว่า CP คือใคร และเติบโตมาจากอะไร:</strong> เริ่มจากลิงก์นี้เพื่อดูภาพรวม ประวัติ ความเป็นมา และทิศทางขององค์กร<br/><a href="https://www.cpgroupglobal.com/th/about-cp-group/vision-and-six-core-values" target="_blank" className="text-blue-600 hover:underline font-medium mt-1 inline-block">👉 คลิกดูที่นี่</a></div>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-[#D4AF37]">•</span> 
          <div><strong>อยากเข้าใจค่านิยมที่คน CP ใช้เป็นหลัก:</strong> เปิดลิงก์นี้เพื่ออ่านเรื่องวิสัยทัศน์และ 6 Core Values<br/><a href="https://www.cpgroupglobal.com/th/about-cp-group/vision-and-six-core-values" target="_blank" className="text-blue-600 hover:underline font-medium mt-1 inline-block">👉 คลิกดูที่นี่</a></div>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-[#D4AF37]">•</span> 
          <div><strong>อยากเห็นว่า CP มีธุรกิจอะไรบ้าง และงานเราเชื่อมโยงภาพใหญ่อย่างไร:</strong> ลิงก์นี้จะพาไปดูภาพรวมธุรกิจและบทบาทของเครือ<br/><a href="https://www.cpgroupglobal.com/th/about-cp-group/our-business" target="_blank" className="text-blue-600 hover:underline font-medium mt-1 inline-block">👉 คลิกดูที่นี่</a></div>
        </li>
      </ul>
    </div>
  </div>
);

const Page3 = () => (
  <div className="page-content space-y-6">
    <h2 className="text-3xl font-bold text-[#002855] border-b-2 border-[#D4AF37] pb-4">
      <span className="text-3xl mr-2">⚙️</span> 2. Understand How We Work
    </h2>
    <p className="text-[#002855] font-bold">เข้าใจภาพรวมการทำงานในเครือ CP</p>
    <p className="text-gray-700 text-sm leading-relaxed">
      CP เป็นเครือธุรกิจขนาดใหญ่ที่มีธุรกิจหลากหลายมาก แต่ละกลุ่มธุรกิจก็อาจจะมีลูกค้า สินค้า ระบบ และวิธีการทำงานที่แตกต่างกันออกไป หากคุณทำงานในบริษัทแม่หรือหน่วยงานส่วนกลาง บทบาทสำคัญของคุณคือการเป็นคนที่ช่วยมองภาพรวม วางมาตรฐาน สนับสนุน และคอยเชื่อมโยงการทำงานของกลุ่มธุรกิจต่างๆ ให้เดินไปในทิศทางเดียวกันครับ
    </p>

    <div className="bg-[#001A36] text-white p-5 rounded-xl shadow-md mt-4">
      <h3 className="font-bold text-[#D4AF37] mb-3 text-base flex items-center gap-2"><span>💡</span> สิ่งที่ควรเข้าใจในภาพรวม:</h3>
      <ul className="space-y-2 pl-5 list-disc list-outside marker:text-[#D4AF37] text-sm opacity-95">
        <li><strong>บริษัทแม่</strong> จะเป็นคนช่วยกำหนดทิศทางและมาตรฐานร่วมกันของทั้งเครือ</li>
        <li><strong>Corporate Functions</strong> จะช่วยซัพพอร์ตให้กลุ่มธุรกิจทำงานได้ชัดเจนขึ้น เร็วขึ้น และเป็นระบบมากขึ้น</li>
        <li>การทำงานของเราต้องมองที่ <strong>"ภาพรวมของเครือ"</strong> ไม่ใช่มองแค่งานของหน่วยงานตัวเองเท่านั้น</li>
        <li>การประสานงานที่ดี จะช่วยลดความซ้ำซ้อน เพิ่มความชัดเจน และดันให้งานเดินหน้าได้เร็วขึ้น</li>
      </ul>
    </div>

    <div className="mt-6">
      <h3 className="text-xl font-bold text-[#002855] mb-3">การทำงานในแบบ CP หมายถึงอะไร?</h3>
      <p className="text-sm text-gray-700 mb-4">มันไม่ใช่แค่การ "ทำงานให้เสร็จ" นะครับ แต่คือการทำงานให้เกิดผลลัพธ์ที่ดี ด้วยวิธีที่ถูกต้องและรับผิดชอบ ซึ่งในทางปฏิบัติหมายถึง:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[
          "เข้าใจเป้าหมายของงานให้ชัดเจนก่อนลงมือทำ",
          "มองให้ออกว่างานของเราจะไปกระทบต่อทีม หน่วยงาน กลุ่มธุรกิจ และผู้เกี่ยวข้องคนอื่นๆ อย่างไรบ้าง",
          "ประสานงานอย่างชัดเจน เพื่อไม่ให้เกิดการทำงานซ้ำซ้อนโดยไม่จำเป็น",
          "ใช้ข้อมูล ข้อเท็จจริง และเหตุผลมาเป็นหลักในการตัดสินใจ",
          "กล้าที่จะ \"ถาม\" เมื่อรู้สึกไม่แน่ใจ",
          "ทำงานให้เร็ว แต่ก็ต้องรักษาคุณภาพและความถูกต้องควบคู่กันไป",
          "ทำสิ่งที่ถูกต้องเสมอ... แม้ในตอนที่ไม่มีใครเห็น"
        ].map((text, i) => (
          <div key={i} className="flex gap-3 bg-white p-3 rounded-lg shadow-sm border border-gray-100 items-start">
            <div className="w-6 h-6 shrink-0 bg-[#D4AF37] text-[#002855] rounded-full flex items-center justify-center font-bold text-xs">{i+1}</div>
            <span className="text-xs text-gray-700 mt-0.5 leading-relaxed">{text}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm mt-6">
      <h4 className="font-bold text-[#002855] mb-3 text-sm flex items-center gap-2"><span>🔗</span> เริ่มจากลิงก์ไหนดี?</h4>
      <div className="space-y-4 text-sm">
        <div>
          <span className="text-[#002855] font-semibold">ถ้ายังไม่แน่ใจว่าหน่วยงานของเราอยู่ตรงไหนในภาพรวม:</span>
          <br/><a href="https://www.cpgroupglobal.com/th/corporate-governance/corporate-governance-structure" target="_blank" className="text-blue-600 hover:underline inline-block mt-1">👉 ใช้ลิงก์นี้ดูโครงสร้างองค์กรเลย</a>
        </div>
        <div className="pt-3 border-t border-blue-200">
          <span className="text-[#002855] font-semibold">ถ้าต้องประสานงานกับหน่วยงานอื่น แต่ไม่รู้ว่าใครดูแลอะไร:</span>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
            <div className="bg-white p-2 border border-gray-200 rounded shadow-sm"><strong className="text-[#D4AF37]">Sustainability:</strong> ขับเคลื่อนงานด้านความยั่งยืน สร้างความน่าเชื่อถือและความไว้วางใจ</div>
            <div className="bg-white p-2 border border-gray-200 rounded shadow-sm"><strong className="text-[#D4AF37]">Corporate Governance:</strong> ขับเคลื่อนงานด้านธรรมาภิบาล การกำกับดูแลกิจการ และนโยบาย</div>
            <div className="bg-white p-2 border border-gray-200 rounded shadow-sm"><strong className="text-[#D4AF37]">Corporate Compliance:</strong> กำกับดูแลให้เป็นไปตามกฎหมาย นโยบาย และจรรยาบรรณ</div>
            <div className="bg-white p-2 border border-gray-200 rounded shadow-sm"><strong className="text-[#D4AF37]">SCOMM:</strong> กำหนดทิศทางเชิงกลยุทธ์การสื่อสารที่เป้าหมายสำคัญ</div>
            <div className="bg-white p-2 border border-gray-200 rounded shadow-sm"><strong className="text-[#D4AF37]">Human Resources:</strong> ดูแลเรื่องพนักงาน การสรรหา พัฒนา สวัสดิการ</div>
            <div className="bg-white p-2 border border-gray-200 rounded shadow-sm"><strong className="text-[#D4AF37]">Legal:</strong> ให้คำปรึกษาด้านกฎหมาย สัญญา และประเด็นที่เกี่ยวข้อง</div>
            <div className="bg-white p-2 border border-gray-200 rounded shadow-sm"><strong className="text-[#D4AF37]">Accounting & Finance:</strong> ดูแลการเงิน บัญชี งบประมาณ รายงานทางการเงิน</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Page4 = () => (
  <div className="page-content space-y-6">
    <h2 className="text-3xl font-bold text-[#002855] border-b-2 border-[#D4AF37] pb-4">
      <span className="text-3xl mr-2">🛡️</span> 3. Work Right
    </h2>
    <p className="text-[#002855] font-bold">ทำงานให้ถูกทางตั้งแต่เริ่มต้น</p>
    <p className="text-gray-700 text-sm leading-relaxed">
      ในการทำงานจริงๆ บางสถานการณ์อาจจะไม่ได้มีคำตอบขาว-ดำชัดเจนทันที เช่น เรื่องการรับของขวัญ การช่วยเหลือคู่ค้า การใช้ข้อมูลบริษัท การอนุมัติงาน หรือแม้แต่การตัดสินใจที่ไปเกี่ยวพันกับคนใกล้ตัว
    </p>

    <div className="bg-gradient-to-br from-[#002855] to-[#001A36] p-6 rounded-xl text-white shadow-lg mt-4 border border-[#002855]">
      <h3 className="font-bold text-[#D4AF37] mb-5 text-base text-center leading-relaxed">
        เมื่อเจอสถานการณ์ชวนคิด สิ่งสำคัญคือ "อย่าเพิ่งตัดสินใจคนเดียวถ้ายังไม่มั่นใจ"<br/>ขอให้หยุดและถามตัวเองด้วย 5 คำถามนี้ก่อน:
      </h3>
      <div className="space-y-3">
        {[
          { q: 'ถูกต้องหรือไม่?', a: 'เรื่องนี้สอดคล้องกับกฎหมาย กฎระเบียบ และนโยบายขององค์กรไหม' },
          { q: 'โปร่งใสหรือไม่?', a: 'ถ้าเรื่องนี้ถูกคนอื่นถามในภายหลัง เราสามารถอธิบายได้อย่างตรงไปตรงมาไหม' },
          { q: 'เป็นธรรมหรือไม่?', a: 'การตัดสินใจนี้ยุติธรรมกับเพื่อนร่วมงาน คู่ค้า ลูกค้า ผู้เกี่ยวข้อง และองค์กรไหม' },
          { q: 'กระทบใครบ้าง?', a: 'เรื่องนี้จะไปส่งผลต่อคน ทีม หน่วยงาน ชุมชน สิ่งแวดล้อม หรือชื่อเสียงขององค์กรไหม' },
          { q: 'ควรถามใครก่อนหรือไม่?', a: 'ถ้าตอบตัวเองไม่ได้ ควรถามหัวหน้า, หน่วยงาน Compliance หรือช่องทางที่องค์กรกำหนดไว้' }
        ].map((item, idx) => (
          <div key={idx} className="bg-white/10 p-3 rounded-lg border border-white/10 flex flex-col md:flex-row md:items-center text-sm gap-1 md:gap-2">
            <span className="text-[#D4AF37] font-bold shrink-0">{idx + 1}. {item.q}</span>
            <span className="text-gray-300">({item.a})</span>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-[#D4AF37]/10 p-4 rounded-lg border border-[#D4AF37]/30 text-sm mt-4 flex items-start gap-3">
      <span className="text-2xl mt-0.5">💡</span>
      <p className="text-[#002855] leading-relaxed"><strong>การเอ่ยปากถามก่อน ไม่ใช่ความผิด</strong> แต่เป็นส่วนหนึ่งของการทำงานอย่างรอบคอบ มีความรับผิดชอบ และช่วยป้องกันความเสี่ยงให้ทั้งตัวคุณเอง ทีม และองค์กรครับ</p>
    </div>

    <div className="mt-6">
      <h3 className="font-bold text-red-700 flex items-center gap-2 text-base mb-3">
        <span>🚨</span> สถานการณ์แบบไหนที่ควร "ถามก่อน" ตัดสินใจ:
      </h3>
      <ul className="grid md:grid-cols-2 gap-3">
        {[
          "ไม่แน่ใจว่าเคสนี้รับ หรือให้ของขวัญได้ไหม",
          "มีญาติ เพื่อน หรือคนใกล้ตัวเข้ามาเกี่ยวข้องกับการตัดสินใจทางธุรกิจ",
          "มีความจำเป็นต้องใช้ หรือส่งต่อข้อมูลของบริษัท ลูกค้า คู่ค้า หรือพนักงาน",
          "มีเรื่องที่อาจไปเกี่ยวข้องกับผลประโยชน์ส่วนตัว",
          "ได้รับคำขอที่รู้สึกว่ามันไม่ค่อยเหมาะสม หรือเป็นเรื่องที่อธิบายทีหลังได้ยาก",
          "ไม่แน่ใจว่าสิ่งที่เห็นอยู่ตอนนี้ อาจจะขัดต่อจรรยาบรรณองค์กรหรือไม่",
          "ต้องการเอา AI มาใช้ช่วยประมวลผลข้อมูลงานหรือเอกสารภายใน",
          "พบเจอพฤติกรรมที่อาจไปกระทบต่อความน่าเชื่อถือขององค์กร"
        ].map((item, i) => (
          <li key={i} className="flex gap-2 items-start text-xs text-gray-700 bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
            <span className="text-red-500 font-bold">•</span> <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm mt-6">
      <h4 className="font-bold text-[#002855] mb-3 text-sm flex items-center gap-2"><span>🔗</span> เริ่มจากลิงก์ไหนดี?</h4>
      <ul className="space-y-3 text-sm">
        <li className="flex items-start gap-2">
          <span className="text-[#D4AF37]">•</span>
          <div><strong>อยากรู้ว่า "เรื่องนี้ทำได้ไหม หรือไม่ควรทำ":</strong> เริ่มที่จรรยาบรรณธุรกิจ (Code of Conduct) ได้เลย<br/><a href="https://www.cpgroupglobal.com/th/document/viewer/15/จรรยาบรรณธุรกิจ-2567-ภาษาไทย" target="_blank" className="text-blue-600 hover:underline font-medium mt-1 inline-block">👉 คลิกดูที่นี่</a></div>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-[#D4AF37]">•</span>
          <div><strong>กำลังจะรับ/ให้ของขวัญ เลี้ยงรับรอง:</strong> เช็กเกณฑ์บริษัทก่อนตัดสินใจ<br/><a href="https://www.cpgroupglobal.com/th/document/viewer/63/นโยบายและแนวปฏิบัติด้านการให้-รับของขวัญหรือประโยชน์อื่นใด" target="_blank" className="text-blue-600 hover:underline font-medium mt-1 inline-block">👉 คลิกดูที่นี่</a></div>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-[#D4AF37]">•</span>
          <div><strong>มีญาติ หรือผลประโยชน์ส่วนตัวมาเกี่ยวกับงาน:</strong> ประเมินความขัดแย้งทางผลประโยชน์<br/><a href="https://www.cpgroupglobal.com/th/document/viewer/62/นโยบายและแนวปฏิบัติด้านความขัดแย้งทางผลประโยชน์" target="_blank" className="text-blue-600 hover:underline font-medium mt-1 inline-block">👉 คลิกดูที่นี่</a></div>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-[#D4AF37]">•</span>
          <div><strong>ต้องการหานโยบายสำคัญ / อ่านนโยบายแล้วยังไม่ชัวร์:</strong> จุดเริ่มต้นคลังนโยบายและการขอคำปรึกษาอยู่ที่นี่<br/><a href="https://www.cpgroupglobal.com/th/corporate-governance/group-code-of-conduct-policies-and-guidelines" target="_blank" className="text-blue-600 hover:underline font-medium mt-1 inline-block">👉 คลิกดูที่นี่</a></div>
        </li>
      </ul>
    </div>
  </div>
);

const Page5 = () => (
  <div className="page-content space-y-6">
    <h2 className="text-3xl font-bold text-[#002855] border-b-2 border-[#D4AF37] pb-4">
      <span className="text-3xl mr-2">🔒</span> 4. Protect
    </h2>
    <p className="text-[#D4AF37] font-bold text-lg">People, Data, and Trust (ดูแลคน ข้อมูล เทคโนโลยี และความไว้วางใจ)</p>
    
    <p className="text-gray-700 text-sm leading-relaxed">
      คำว่า "ความปลอดภัย" ในการทำงาน ไม่ได้หมายถึงแค่ระวังเดินสะดุดในออฟฟิศเท่านั้นนะครับ แต่ยังรวมไปถึงการช่วยกันดูแลข้อมูล ระบบ เทคโนโลยี เอกสาร ทรัพย์สินบริษัท และการใช้เครื่องมือดิจิทัลอย่างเหมาะสมด้วย พนักงานทุกคนคือด่านหน้าที่จะช่วยลดความเสี่ยงเหล่านี้ได้ แค่ทำงานอย่างรอบคอบและถามเมื่อไม่แน่ใจ
    </p>

    <div className="space-y-3 mt-6">
      <h3 className="font-bold text-[#002855] text-base mb-3">เรื่องที่ควรตั้งการ์ดระวังตั้งแต่วันแรก:</h3>
      {[
        { title: 'Safety (ความปลอดภัย)', desc: 'ปฏิบัติตามกฎความปลอดภัยของพื้นที่ทำงาน รีบแจ้งทันทีเมื่อพบจุดเสี่ยง อุบัติเหตุ หรือเหตุการณ์ที่อาจเกิดอันตราย' },
        { title: 'Security (ความปลอดภัยทรัพย์สิน)', desc: 'ดูแลบัตรพนักงาน พื้นที่ทำงาน เอกสาร อุปกรณ์ และทรัพย์สินของบริษัทอย่างเหมาะสม' },
        { title: 'Cybersecurity (ความปลอดภัยไซเบอร์)', desc: 'ระวังพวกอีเมลหลอกลวง (Phishing) ลิงก์แปลกๆ ไฟล์แนบที่ไม่น่าเชื่อถือ และงดใช้รหัสผ่านที่เดาง่ายหรือใช้ซ้ำกันหลายๆ ระบบ' },
        { title: 'Data Privacy (ข้อมูลส่วนบุคคล)', desc: 'ใช้ข้อมูลส่วนบุคคลของลูกค้า คู่ค้า พนักงาน และผู้เกี่ยวข้อง "เท่าที่จำเป็น" และใช้ตาม "วัตถุประสงค์ที่ได้รับอนุญาต" เท่านั้น' },
        { title: 'Responsible AI (ใช้ AI อย่างรับผิดชอบ)', desc: 'คุณใช้ AI ช่วยเพิ่มประสิทธิภาพงานได้ครับ แต่ต้องระวัง "ข้อมูลที่ป้อนเข้าไป" โดยเฉพาะข้อมูลลับ ข้อมูลส่วนบุคคล ข้อมูลการเงิน ข้อมูลลูกค้า/คู่ค้า หรือข้อมูลที่บริษัทเบื้องต้นยังไม่เปิดเผย' }
      ].map((item, idx) => (
        <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-[#002855]">
          <strong className="text-[#D4AF37] block mb-1 text-sm">{item.title}</strong>
          <p className="text-xs text-gray-700 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>

    <div className="bg-[#002855] text-white p-6 rounded-xl mt-6 shadow-md">
      <h4 className="font-bold text-[#D4AF37] mb-4 text-base">เมื่อไม่แน่ใจ เรื่องนี้ควรถามใคร?</h4>
      <ul className="space-y-3 text-sm opacity-95">
        <li className="flex gap-2"><span className="text-[#D4AF37] shrink-0">•</span> <span><strong>เรื่องความปลอดภัยในพื้นที่ทำงาน อุบัติเหตุ หรือจุดเสี่ยง:</strong> ติดต่อ Safety (ภายใต้ Compliance)</span></li>
        <li className="flex gap-2"><span className="text-[#D4AF37] shrink-0">•</span> <span><strong>เรื่องคอมพิวเตอร์ อีเมล ระบบ หรืออุปกรณ์:</strong> ติดต่อ IT Support ประจำหน่วยงานของคุณ</span></li>
        <li className="flex gap-2"><span className="text-[#D4AF37] shrink-0">•</span> <span><strong>เรื่องข้อมูลส่วนบุคคล ข้อมูลลับ หรือข้อมูลสำคัญ:</strong> ถามหน่วยงาน Compliance</span></li>
        <li className="flex gap-2"><span className="text-[#D4AF37] shrink-0">•</span> <span><strong>เรื่องการใช้ AI กับงานหรือข้อมูลบริษัท:</strong> ตรวจสอบ AI Governance Policy</span></li>
        <li className="flex gap-2"><span className="text-[#D4AF37] shrink-0">•</span> <span><strong>เรื่องนโยบาย จรรยาบรรณ ของขวัญ ผลประโยชน์:</strong> ถามหน่วยงาน Compliance</span></li>
        <li className="flex gap-2 pt-3 border-t border-white/20 mt-2 text-[#D4AF37] font-bold"><span className="shrink-0">•</span> <span>ถ้ายังไม่แน่ใจจริงๆ ว่าควรถามใคร 👉 ให้เริ่มจาก "หัวหน้างาน" หรือหน่วยงานต้นสังกัดได้เลยครับ</span></li>
      </ul>
    </div>
    
    <div className="bg-gray-100 p-4 rounded-lg border border-gray-200 mt-4 text-center">
      <p className="text-sm text-[#002855]"><strong>📌 สรุปง่ายๆ คือ:</strong> ทำงานอย่างปลอดภัย ดูแลรักษาข้อมูล ระมัดระวังเทคโนโลยี และถามก่อนเสมอเมื่อไม่แน่ใจ</p>
    </div>
  </div>
);

const Page6 = () => (
  <div className="page-content space-y-6">
    <h2 className="text-3xl font-bold text-[#002855] border-b-2 border-[#D4AF37] pb-4">
      <span className="text-3xl mr-2">🗣️</span> 5. Speak Up
    </h2>
    <p className="text-[#D4AF37] font-bold text-lg">Speak Up and Be Heard (กล้าถาม กล้าพูด และแจ้งข้อกังวลอย่างสุจริต)</p>
    
    <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 text-gray-800 text-sm leading-relaxed shadow-sm">
      <p className="mb-2">CP เปิดพื้นที่กว้างๆ ให้พนักงานทุกคนกล้าถาม กล้าพูด และกล้าแจ้งเมื่อพบเห็นสิ่งที่อาจจะไม่ถูกต้องครับ!</p>
      <p className="mb-3">ถ้าคุณมีข้อกังวล เห็นพฤติกรรมที่ไม่เหมาะสม หรือลังเลว่าเรื่องนี้ควรรายงานไหม ขอให้เริ่มจากการแจ้งเบาะแส ขอคำปรึกษาจากหน่วยงาน Compliance หรือช่องทางบนเว็บไซต์องค์กรได้เลย</p>
      <p className="font-bold text-[#002855]">จำไว้ว่าการพูดเมื่อพบข้อกังวล ไม่ใช่การสร้างปัญหา แต่เป็นการช่วยป้องกันความเสี่ยง เป็นการดูแลเพื่อนร่วมงาน และรักษาความน่าเชื่อถือของบ้านเราครับ</p>
    </div>

    <div className="grid md:grid-cols-2 gap-6 mt-6">
      <div>
        <h3 className="font-bold text-red-700 flex items-center gap-2 text-sm mb-3">
          <span>🚨</span> เรื่องแบบไหนที่ควรถามหรือรีบแจ้ง?
        </h3>
        <ul className="space-y-2 text-xs text-gray-700 bg-white p-4 rounded-xl border border-gray-200 shadow-sm h-full">
          <li>• ความไม่เป็นธรรมในที่ทำงาน</li>
          <li>• การเลือกปฏิบัติ การคุกคาม หรือการกลั่นแกล้ง</li>
          <li>• พฤติกรรมที่อาจขัดต่อจรรยาบรรณ</li>
          <li>• ความขัดแย้งทางผลประโยชน์ (Conflict of Interest)</li>
          <li>• การรับหรือให้ของขวัญที่ไม่เหมาะสม</li>
          <li>• การใช้อำนาจในทางที่ผิด หรือ การทุจริต</li>
          <li>• การใช้ข้อมูลผิดวัตถุประสงค์ หรือ ละเมิดนโยบายบริษัท</li>
          <li>• ความเสี่ยงด้านความปลอดภัยต่างๆ</li>
          <li>• เรื่องที่อาจไปกระทบต่อองค์กร เพื่อนร่วมงาน ลูกค้า คู่ค้า</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-[#002855] text-sm mb-3">ช่องทางไหนที่คุณใช้พูดได้บ้าง?</h3>
        <ul className="space-y-2 text-xs text-gray-700 bg-white p-4 rounded-xl border border-gray-200 shadow-sm h-full">
          <li>• หัวหน้างานของคุณ</li>
          <li>• หน่วยงานที่เกี่ยวข้องกับเรื่องนั้นๆ โดยตรง</li>
          <li>• หน่วยงาน CG หรือ Compliance</li>
          <li>• ช่องทาง Speak Up Channel</li>
          <li>• ช่องทางให้คำปรึกษาหรือแจ้งข้อกังวลที่องค์กรกำหนดไว้</li>
        </ul>
      </div>
    </div>

    <div className="bg-[#D4AF37] text-[#001A36] p-5 rounded-xl mt-6 shadow-md border border-[#D4AF37]">
      <h3 className="text-base font-black mb-2 flex items-center gap-2"><span>🛡️</span> สิ่งสำคัญที่คุณควรทราบ:</h3>
      <p className="text-sm font-medium leading-relaxed">
        CP ให้ความสำคัญกับการคุ้มครองผู้ที่แจ้งข้อกังวลด้วยเจตนาสุจริตอย่างเต็มที่ และ <strong className="text-white bg-[#001A36] px-2 py-0.5 rounded shadow-sm inline-block mt-1">เราไม่ยอมรับการตอบโต้ กลั่นแกล้ง หรือปฏิบัติไม่เป็นธรรมต่อผู้แจ้งข้อกังวล (Non-Retaliation) โดยเด็ดขาด</strong>
      </p>
    </div>

    <div className="bg-gray-100 p-4 rounded-lg border border-gray-200 mt-4 text-center">
      <p className="text-sm text-[#002855]"><strong>📌 สรุปง่ายๆ คือ:</strong> ถ้ารู้สึกว่าเรื่องนี้อาจไม่ถูกต้อง อย่าเก็บไว้คนเดียวครับ ให้ถาม พูดคุย หรือใช้ช่องทางที่ปลอดภัยรายงานได้เลย</p>
    </div>

    <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm mt-6">
      <h4 className="font-bold text-[#002855] mb-3 text-sm flex items-center gap-2"><span>🔗</span> เริ่มจากลิงก์ไหนดี?</h4>
      <div className="space-y-3 text-xs">
        <a href="https://cco.cpgroupsustainability.com/GRC/Whistleblower/WBForms/GlobalWB" target="_blank" className="block bg-white p-3 rounded shadow-sm hover:shadow-md border border-gray-200 transition-shadow">
          <strong className="text-[#002855] block mb-1">เห็นเรื่องที่อาจไม่ถูกต้อง หรือต้องการแจ้งเรื่องอย่างเป็นทางการ:</strong>
          <span className="text-blue-600">👉 ไปที่หน้าแจ้งข้อกังวล (Speak Up Channel)</span>
        </a>
        <a href="https://www.cpgroupglobal.com/th/document/viewer/64/นโยบายและแนวปฏิบัติด้านการแจ้งเบาะแส" target="_blank" className="block bg-white p-3 rounded shadow-sm hover:shadow-md border border-gray-200 transition-shadow">
          <strong className="text-[#002855] block mb-1">กังวลว่าจะถูกตอบโต้หลังแจ้งเรื่อง:</strong>
          <span className="text-blue-600">👉 อ่านนโยบายการคุ้มครองผู้แจ้งเบาะแส</span>
        </a>
        <a href="https://www.cpgroupglobal.com/th/corporate-governance/whistleblowing" target="_blank" className="block bg-white p-3 rounded shadow-sm hover:shadow-md border border-gray-200 transition-shadow">
          <strong className="text-[#002855] block mb-1">อยากรู้ว่าแจ้งแล้ว องค์กรจะจัดการเรื่องยังไงต่อ:</strong>
          <span className="text-blue-600">👉 ดูกระบวนการจัดการข้อร้องเรียน</span>
        </a>
      </div>
    </div>
  </div>
);

const Page7 = () => (
  <div className="page-content space-y-6">
    <h2 className="text-3xl font-bold text-[#002855] border-b-2 border-[#D4AF37] pb-4">
      <span className="text-3xl mr-2">🌱</span> 6. Grow Together
    </h2>
    <p className="text-[#D4AF37] font-bold text-lg">เรียนรู้ ขอ feedback และเติบโตไปกับทีม</p>
    
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 text-sm text-gray-700 leading-relaxed">
      <p className="mb-3">การเริ่มงานใหม่จะลื่นไหลขึ้นเยอะ เมื่อคุณรู้ว่าควรโฟกัสเรียนรู้เรื่องอะไร ต้องใช้ระบบไหน และควรหันไปถามใคร CP สนับสนุนเต็มที่ให้พนักงานเรียนรู้อย่างต่อเนื่อง พัฒนาตัวเอง และขอคำแนะนำเสมอเมื่อจำเป็นครับ</p>
      <div className="bg-[#F4F7FA] p-3 rounded-lg border-l-4 border-[#002855]">
        <strong>จำไว้เสมอว่า:</strong> การถาม ไม่ใช่เรื่องผิด, การขอ Feedback ไม่ใช่การแสดงว่าเรายังไม่เก่ง แต่มันคือวิธีชั้นยอด ที่จะช่วยให้เราเข้าใจความคาดหวัง ปรับตัวได้เร็ว และทำงานได้เฉียบคมขึ้น!
      </div>
    </div>

    <h3 className="text-xl font-bold text-[#002855] mt-8">Roadmap สิ่งที่ควรทำในช่วงเริ่มต้น:</h3>
    
    <div className="relative border-l-4 border-[#D4AF37] pl-6 py-2 space-y-6 ml-3 mt-4">
      <div className="relative">
        <div className="absolute w-4 h-4 bg-[#002855] rounded-full -left-[1.65rem] top-1 border-2 border-white"></div>
        <h4 className="font-bold text-[#002855] text-base">📌 ช่วงแรก: เข้าใจงาน ทีม และวิธีทำงาน</h4>
        <ul className="text-xs text-gray-700 mt-2 list-disc ml-4 space-y-1">
          <li>พบหัวหน้างานเพื่อทำความเข้าใจความคาดหวังเบื้องต้น</li>
          <li>ทำความรู้จักทีมและผู้ที่ต้องประสานงานด้วยบ่อยๆ</li>
          <li>เข้าใจเป้าหมายของทีมและบทบาทหน้าที่ของตัวเราเอง</li>
          <li>รู้ว่าต้องใช้ระบบใดบ้างในการทำงานประจำวัน</li>
          <li>รู้ว่าจะหันไปถามใครได้บ้างเมื่อรู้สึกไม่แน่ใจ</li>
        </ul>
      </div>
      <div className="relative">
        <div className="absolute w-4 h-4 bg-[#002855] rounded-full -left-[1.65rem] top-1 border-2 border-white"></div>
        <h4 className="font-bold text-[#002855] text-base">📌 ช่วงต่อมา: เริ่มทำงานให้ถูกทาง</h4>
        <ul className="text-xs text-gray-700 mt-2 list-disc ml-4 space-y-1">
          <li>เข้าใจขั้นตอนการทำงานและการประสานงานหลักๆ</li>
          <li>รู้ว่าต้องเดินไปขออนุมัติ หรือรายงานเรื่องไหนบ้าง</li>
          <li>เรียนรู้วิธีการใช้ข้อมูล เอกสาร ระบบ และเครื่องมือดิจิทัลอย่างเหมาะสม</li>
          <li>อ่าน Code of Conduct และนโยบายสำคัญที่เกี่ยวกับงานของเรา</li>
          <li>ถามหัวหน้าหรือหน่วยงานที่เกี่ยวข้องทันที เมื่อเจอสถานการณ์ที่ไม่แน่ใจ</li>
        </ul>
      </div>
      <div className="relative">
        <div className="absolute w-4 h-4 bg-[#D4AF37] rounded-full -left-[1.65rem] top-1 border-2 border-white"></div>
        <h4 className="font-bold text-[#002855] text-base">📌 เมื่อเริ่มคุ้นกับงาน: เชื่อมโยงงานกับองค์กร</h4>
        <ul className="text-xs text-gray-700 mt-2 list-disc ml-4 space-y-1">
          <li>เริ่มมองเห็นและเข้าใจว่า งานของเราไปช่วยสนับสนุนเป้าหมายของทีมและองค์กรได้อย่างไร</li>
          <li>รู้จักช่องทางการขอความช่วยเหลือและช่องทางการแจ้งข้อกังวล</li>
          <li>ขอ Feedback จากหัวหน้าเกี่ยวกับการปรับตัวและการทำงานที่ผ่านมา</li>
          <li>เริ่มวางแผนการเรียนรู้หรือมองหาทักษะที่ควรพัฒนาต่อยอด</li>
        </ul>
      </div>
    </div>

    <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm mt-6">
      <h4 className="font-bold text-[#002855] mb-3 text-sm flex items-center gap-2"><span>🔗</span> เริ่มจากลิงก์ไหนดี?</h4>
      <ul className="space-y-3 text-xs">
        <li className="flex flex-col md:flex-row md:justify-between md:items-center bg-white p-3 rounded shadow-sm border border-gray-100">
          <strong className="text-[#002855] mb-1 md:mb-0">อยากรู้ว่าช่วงเริ่มงานต้องเรียนคอร์สไหนบ้าง:</strong>
          <span className="text-gray-600 bg-gray-100 px-2 py-1 rounded">👉 เอกสารปฐมนิเทศจากกลุ่มธุรกิจของท่าน</span>
        </li>
        <li className="flex flex-col md:flex-row md:justify-between md:items-center bg-white p-3 rounded shadow-sm border border-gray-100">
          <strong className="text-[#002855] mb-1 md:mb-0">เข้าเรียนหลักสูตรจรรยาบรรณที่พนักงานควรรู้:</strong>
          <a href="https://learn-coc.cpgroupsustainability.com/" target="_blank" className="text-blue-600 hover:underline">👉 คลิกเพื่อเข้าเรียน</a>
        </li>
        <li className="flex flex-col md:flex-row md:justify-between md:items-center bg-white p-3 rounded shadow-sm border border-gray-100">
          <strong className="text-[#002855] mb-1 md:mb-0">สำหรับหัวหน้างาน (บทบาทการตัดสินใจ/ดูแลทีม):</strong>
          <a href="https://learn-managerethics.cpgroupsustainability.com/" target="_blank" className="text-blue-600 hover:underline">👉 คลิกเพื่อเข้าเรียน</a>
        </li>
        <li className="flex flex-col md:flex-row md:justify-between md:items-center bg-white p-3 rounded shadow-sm border border-gray-100">
          <strong className="text-[#002855] mb-1 md:mb-0">ค้นหาและดูสถานะนโยบายที่ต้องอ่าน/รับทราบ:</strong>
          <a href="https://policy.cpgroupsustainability.com/" target="_blank" className="text-blue-600 hover:underline">👉 คลิกตรวจสอบนโยบาย</a>
        </li>
        <li className="flex flex-col md:flex-row md:justify-between md:items-center bg-white p-3 rounded shadow-sm border border-gray-100">
          <strong className="text-[#002855] mb-1 md:mb-0">อยากพัฒนาทักษะ/วางแผนเติบโต (คุยกับหัวหน้าก่อนนะ):</strong>
          <span className="text-gray-600 bg-gray-100 px-2 py-1 rounded">👉 วางแผนการเรียนรู้และการเติบโตกับหัวหน้างานของท่าน</span>
        </li>
      </ul>
    </div>
  </div>
);

const Page8 = () => (
  <div className="page-content space-y-6">
    <h2 className="text-3xl font-bold text-[#002855] border-b-2 border-[#D4AF37] pb-4">
      <span className="text-3xl mr-2">🌍</span> 7. Responsible Growth
    </h2>
    <p className="text-[#D4AF37] font-bold text-lg">เติบโตอย่างรับผิดชอบ</p>
    
    <p className="text-gray-700 text-sm leading-relaxed">
      สำหรับการเติบโตของ CP เราไม่ได้วัดกันแค่ที่ "ผลประกอบการ" เพียงอย่างเดียวครับ แต่เรารวมถึง "วิธี" ที่เราใช้ดำเนินธุรกิจ และ "ผลกระทบ" ที่เรามีต่อผู้คน สังคม และสิ่งแวดล้อมด้วย สำหรับ CP การเติบโตต้องเดินคู่ไปกับความรับผิดชอบ ความโปร่งใส ความเป็นธรรม และการคำนึงถึงผลประโยชน์ระยะยาว
    </p>
    <p className="text-gray-700 text-sm leading-relaxed">
      ฟังดูเหมือนเป็นเรื่องสเกลใหญ่ระดับองค์กรใช่ไหมครับ? แต่จริงๆ แล้วมันเกี่ยวข้องและฝังอยู่ในการทำงานของพนักงานทุกคนเลย เพราะการตัดสินใจในแต่ละวันของเรา ล้วนส่งผลต่อความน่าเชื่อถือขององค์กรทั้งสิ้น
    </p>

    <div className="bg-[#002855] text-white p-6 rounded-xl mt-6 shadow-md">
      <h3 className="font-bold text-[#D4AF37] mb-4 text-base">เรื่องที่เกี่ยวข้องกับพนักงานทุกคนแบบเต็มๆ:</h3>
      <ul className="space-y-3 text-sm opacity-95 list-disc ml-5">
        <li>ใช้ทรัพยากรขององค์กรอย่างเหมาะสมและคุ้มค่า ช่วยกันลดความสิ้นเปลืองในการทำงาน</li>
        <li>เคารพในสิทธิมนุษยชนและศักดิ์ศรีของผู้อื่นเสมอ ไม่เลือกปฏิบัติ</li>
        <li>คิดเผื่อและคำนึงถึงผลกระทบต่อเพื่อนร่วมงาน ลูกค้า คู่ค้า ชุมชน และสิ่งแวดล้อม</li>
        <li>ทำงานอย่างโปร่งใส ถูกต้อง และตรวจสอบได้</li>
        <li>สนับสนุนการเติบโตที่สร้างคุณค่าให้กับประเทศชาติ ประชาชน และองค์กร</li>
      </ul>
    </div>
    
    <div className="bg-gray-100 p-4 rounded-lg border border-gray-200 mt-4 text-center">
      <p className="text-sm text-[#002855]"><strong>📌 สรุปง่ายๆ คือ:</strong> ความยั่งยืน ไม่ใช่งานของแผนกใดแผนกหนึ่งเท่านั้น แต่มันคือวิธีคิด วิธีทำงาน และวิถีการตัดสินใจของพวกเราทุกคนครับ</p>
    </div>

    <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm mt-6">
      <h4 className="font-bold text-[#002855] mb-3 text-sm flex items-center gap-2"><span>🔗</span> เริ่มจากลิงก์ไหนดี?</h4>
      <ul className="space-y-3 text-xs">
        <li className="flex flex-col md:flex-row md:justify-between md:items-center bg-white p-3 rounded shadow-sm border border-gray-100">
          <strong className="text-[#002855] mb-1 md:mb-0">อยากเข้าใจว่า CP มองความยั่งยืนอย่างไร:</strong>
          <a href="https://www.cpgroupglobal.com/th/sustainability" target="_blank" className="text-blue-600 hover:underline">👉 คลิกอ่านเพิ่มเติม</a>
        </li>
        <li className="flex flex-col md:flex-row md:justify-between md:items-center bg-white p-3 rounded shadow-sm border border-gray-100">
          <strong className="text-[#002855] mb-1 md:mb-0">อยากรู้ว่า 3H และ 15 Goals คืออะไร เกี่ยวกับเรายังไง:</strong>
          <a href="https://www.cpgroupglobal.com/th/sustainability/sustainability-at-cp-group/cp-group-2030-sustainability-framework-and-goals" target="_blank" className="text-blue-600 hover:underline">👉 คลิกดูเป้าหมายความยั่งยืน</a>
        </li>
        <li className="flex flex-col md:flex-row md:justify-between md:items-center bg-white p-3 rounded shadow-sm border border-gray-100">
          <strong className="text-[#002855] mb-1 md:mb-0">ทำงานเกี่ยวกับสิทธิมนุษยชน แรงงาน ชุมชน คู่ค้า:</strong>
          <a href="https://www.cpgroupglobal.com/th/document/viewer/56/นโยบายและแนวปฏิบัติด้านสิทธิมนุษยชนและการปฏิบัติด้านแรงงาน" target="_blank" className="text-blue-600 hover:underline">👉 คลิกดูนโยบาย</a>
        </li>
        <li className="flex flex-col md:flex-row md:justify-between md:items-center bg-white p-3 rounded shadow-sm border border-gray-100">
          <strong className="text-[#002855] mb-1 md:mb-0">ดูผลงานหรืออ่านรายงานความยั่งยืนของ CP:</strong>
          <a href="https://www.cpgroupglobal.com/th/document/sustainability-reports" target="_blank" className="text-blue-600 hover:underline">👉 คลิกดูรายงานความยั่งยืน</a>
        </li>
      </ul>
    </div>
  </div>
);

const Page9 = () => (
  <div className="page-content space-y-4 h-full flex flex-col">
    <h2 className="text-3xl font-bold text-[#002855] border-b-2 border-[#D4AF37] pb-4 flex items-center gap-2">
      <span>⚡</span> Quick Start
    </h2>
    <p className="text-[#002855] font-bold text-sm mb-2">ไม่แน่ใจเรื่องไหน ให้เริ่มจากตรงนี้</p>
    
    <div className="flex-1 overflow-auto custom-scrollbar border border-gray-200 rounded-xl shadow-sm bg-white mt-2">
      <table className="w-full text-left border-collapse text-sm">
        <thead>
          <tr className="bg-[#002855] text-white">
            <th className="p-4 border-b font-medium w-2/5">ถ้าคุณมีคำถามเรื่อง...</th>
            <th className="p-4 border-b font-medium w-3/5">จุด Start ที่คุณควรไป</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="hover:bg-blue-50 transition-colors">
            <td className="p-4 font-bold text-gray-800">ข้อมูลพนักงาน เวลาทำงาน วันลา สวัสดิการ เงินเดือน ระบบ HR</td>
            <td className="p-4 text-gray-700 bg-gray-50/50">เริ่มจาก HR / People Portal / Employee Handbook ของบริษัทคุณ</td>
          </tr>
          <tr className="hover:bg-blue-50 transition-colors">
            <td className="p-4 font-bold text-gray-800">คอมพิวเตอร์ อีเมล ระบบ หรือสิทธิ์เข้าใช้งาน</td>
            <td className="p-4 text-gray-700 bg-gray-50/50">เริ่มจาก IT Helpdesk หรือช่องทาง IT ของบริษัท<br/><span className="text-blue-600 text-xs mt-1 inline-block">👉 ติดต่อ IT Helpdesk (Line: Axons Connect)</span></td>
          </tr>
          <tr className="hover:bg-blue-50 transition-colors">
            <td className="p-4 font-bold text-gray-800">จรรยาบรรณ ของขวัญ ผลประโยชน์ขัดกัน หรือนโยบายสำคัญ</td>
            <td className="p-4 text-gray-700 bg-gray-50/50">เริ่มจาก Code of Conduct, Group Policies หรือ CG / Compliance<br/><a href="https://www.cpgroupglobal.com/th/corporate-governance/group-code-of-conduct-policies-and-guidelines" target="_blank" className="text-blue-600 hover:underline text-xs mt-1 inline-block">👉 คลิกไปที่คลังนโยบาย</a></td>
          </tr>
          <tr className="hover:bg-blue-50 transition-colors">
            <td className="p-4 font-bold text-gray-800">การใช้ AI กับข้อมูลงาน</td>
            <td className="p-4 text-gray-700 bg-gray-50/50">เริ่มจาก Internal AI Guideline หรือหน่วยงานนโยบาย (ถ้ายังไม่มี ให้ใช้ AI Governance Policy)<br/><span className="text-blue-600 text-xs mt-1 inline-block">👉 ดูแนวทางการใช้ AI</span></td>
          </tr>
          <tr className="hover:bg-blue-50 transition-colors">
            <td className="p-4 font-bold text-gray-800">ข้อกังวลหรือสิ่งที่อาจไม่ถูกต้อง</td>
            <td className="p-4 text-gray-700 bg-gray-50/50">เริ่มจากหัวหน้างาน, Compliance หรือ Speak Up Channel<br/><a href="https://cco.cpgroupsustainability.com/GRC/Whistleblower/WBForms/GlobalWB" target="_blank" className="text-blue-600 hover:underline text-xs mt-1 inline-block">👉 คลิกไปที่ช่องทางแจ้งเรื่อง</a></td>
          </tr>
          <tr className="bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 transition-colors">
            <td className="p-4 font-black text-[#002855]">ไม่แน่ใจจริงๆ ว่าต้องถามใครเลย!!</td>
            <td className="p-4 font-bold text-[#002855]">ให้เริ่มจาก "หัวหน้างาน" หรือหน่วยงานต้นสังกัด แล้วให้เขาช่วยแนะนำ</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const Page10 = () => {
  const [checks, setChecks] = useState(Array(10).fill(false));
  
  const toggleCheck = (index) => {
    const newChecks = [...checks];
    newChecks[index] = !newChecks[index];
    setChecks(newChecks);
  };

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

  const progress = Math.round((checks.filter(Boolean).length / checks.length) * 100);

  return (
    <div className="page-content space-y-6 flex flex-col h-full">
      <h2 className="text-2xl font-bold text-[#002855] border-b-2 border-[#D4AF37] pb-4 flex items-center gap-2">
        <span>✅</span> Working the CP Way Checklist
      </h2>
      <p className="text-gray-700 text-sm font-medium">เช็กตัวเองง่ายๆ ในช่วงเริ่มงาน ก่อนไปลุยงาน ลองลิสต์เช็กตัวเองตามนี้ดูนะครับ: (คลิกเพื่อทำเครื่องหมาย)</p>

      <div className="w-full bg-gray-200 rounded-full h-3 mb-1 overflow-hidden">
        <div className="bg-[#D4AF37] h-3 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="text-right text-xs font-bold text-[#002855] mb-4">{progress}% Complete</div>

      <div className="flex-1 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
        {checklistItems.map((item, idx) => (
          <label key={idx} className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-colors shadow-sm ${checks[idx] ? 'bg-blue-50 border-[#002855]' : 'bg-white border-gray-200 hover:bg-gray-50'}`}>
            <input type="checkbox" className="w-5 h-5 mt-0.5 accent-[#002855] rounded border-gray-300 cursor-pointer shrink-0" checked={checks[idx]} onChange={() => toggleCheck(idx)} />
            <span className={`text-sm ${checks[idx] ? 'text-[#002855] font-bold' : 'text-gray-700'}`}>{item}</span>
          </label>
        ))}
      </div>

      <div className="bg-gradient-to-r from-[#002855] to-[#004080] p-6 rounded-xl text-white text-center shadow-lg mt-auto shrink-0 border border-[#002855]">
        <h3 className="font-bold text-xl mb-3 text-[#D4AF37]">ข้อความปิดท้ายจากเรา 💙</h3>
        <p className="text-sm opacity-95 leading-relaxed">
          ย้ำอีกครั้งว่า คุณไม่จำเป็นต้องรู้ทุกอย่างตั้งแต่วันแรกครับ สิ่งสำคัญที่สุดคือการ <strong className="text-[#D4AF37]">"เปิดใจเรียนรู้ กล้าถามเมื่อไม่แน่ใจ ทำงานให้ถูกทาง และพร้อมที่จะเติบโตไปกับทีม"</strong><br/><br/>ยินดีต้อนรับสู่ CP ครับ... เราพร้อมเริ่มต้นไปด้วยกัน!
        </p>
      </div>
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pages = [
    { title: "หน้าปก", component: <CoverPage /> },
    { title: "ยินดีต้อนรับสู่ CP!", component: <WelcomePage /> },
    { title: "1. Learn CP", component: <Page2 /> },
    { title: "2. Understand How We Work", component: <Page3 /> },
    { title: "3. Work Right", component: <Page4 /> },
    { title: "4. Protect", component: <Page5 /> },
    { title: "5. Speak Up and Be Heard", component: <Page6 /> },
    { title: "6. Grow Together", component: <Page7 /> },
    { title: "7. Responsible Growth", component: <Page8 /> },
    { title: "Quick Start", component: <Page9 /> },
    { title: "Checklist & Closing", component: <Page10 /> },
  ];

  const totalPages = pages.length;

  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages - 1));
  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 0));
  const goToPage = (idx) => {
    setCurrentPage(idx);
    setSidebarOpen(false);
  };

  return (
    <div className="font-['Kanit',sans-serif] bg-[#F4F7FA] text-gray-800 min-h-screen flex flex-col md:flex-row overflow-hidden selection:bg-[#D4AF37] selection:text-[#002855]">
      
      {/* Mobile Header */}
      <div className="md:hidden bg-[#002855] text-white p-4 flex justify-between items-center shadow-md z-20 relative">
        <div className="font-bold text-[#D4AF37] truncate flex-1">Working the CP Way</div>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1 focus:outline-none">
          <IconMenu />
        </button>
      </div>

      {/* Sidebar Navigation */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 fixed md:static top-0 left-0 h-full w-72 bg-[#001A36] text-white z-30 flex flex-col shadow-2xl`}>
        <div className="p-6 border-b border-white/10 hidden md:block text-center">
          <div className="w-12 h-12 mx-auto bg-[#D4AF37] rounded-full flex items-center justify-center mb-3">
             <span className="text-[#002855] font-black text-xl">CP</span>
          </div>
          <h1 className="font-bold text-lg text-white">Working the CP Way</h1>
          <p className="text-xs text-gray-400">E-Book for Newbies</p>
        </div>
        
        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-1">
          <div className="text-xs font-bold text-gray-400 mb-3 px-2 uppercase tracking-wider">Table of Contents</div>
          {pages.map((page, idx) => (
            <button
              key={idx}
              onClick={() => goToPage(idx)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-200 ${
                currentPage === idx 
                  ? 'bg-[#D4AF37] text-[#001A36] font-bold shadow-md' 
                  : 'text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="mr-2 opacity-70">{idx === 0 ? '🏠' : `${idx}.`}</span> {page.title}
            </button>
          ))}
        </div>
        
        {/* Mobile close button space */}
        <div className="md:hidden p-4 border-t border-white/10">
          <button onClick={() => setSidebarOpen(false)} className="w-full bg-white/10 py-2 rounded text-sm hover:bg-white/20">Close Menu</button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen md:h-auto overflow-hidden relative">
        {/* Overlay for mobile sidebar */}
        {sidebarOpen && <div className="md:hidden fixed inset-0 bg-black/50 z-20" onClick={() => setSidebarOpen(false)}></div>}
        
        <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar scroll-smooth flex justify-center pb-24 md:pb-8">
          <div className="max-w-3xl w-full h-full">
            {/* Page Animation Wrapper */}
            <div key={currentPage} className="animate-fade-in-up h-full bg-white md:rounded-2xl md:shadow-xl md:p-8 p-4 border border-gray-100 flex flex-col">
              {pages[currentPage].component}
            </div>
          </div>
        </div>

        {/* Bottom Navigation Control */}
        <div className="absolute bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-10">
          <div className="max-w-3xl mx-auto flex items-center justify-between">
            <button 
              onClick={handlePrev} 
              disabled={currentPage === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-colors ${currentPage === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-[#002855] hover:bg-blue-50'}`}
            >
              <IconChevronLeft /> <span className="hidden sm:inline">หน้าก่อนหน้า</span>
            </button>
            
            <div className="text-sm font-medium text-gray-500 bg-gray-100 px-4 py-1.5 rounded-full">
              หน้า {currentPage + 1} / {totalPages}
            </div>
            
            <button 
              onClick={handleNext} 
              disabled={currentPage === totalPages - 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-colors ${currentPage === totalPages - 1 ? 'text-gray-400 cursor-not-allowed' : 'text-white bg-[#002855] hover:bg-[#001A36] shadow-md'}`}
            >
              <span className="hidden sm:inline">หน้าถัดไป</span> <IconChevronRight />
            </button>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;700;900&display=swap');
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 20px;
        }
        .bg-\\[\\#001A36\\] .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(255,255,255,0.2);
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.4s ease-out forwards;
        }
        
        /* Typography overrides to ensure text is beautiful */
        .page-content p {
          margin-bottom: 1rem;
        }
        .page-content ul, .page-content ol {
          margin-bottom: 1rem;
        }
      `}} />
    </div>
  );
}