import React, { useState } from 'react';
import { Check, Quote, Star, Ban, FileText, Flag, Receipt, Settings, PieChart, Instagram, Facebook, Twitter } from 'lucide-react';

export default function App() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    // 캡처해주신 Form Access Key를 직접 적용했습니다.
    const accessKey = 'dfe9d45f-aacc-4e43-b68d-4f18b2dffc48';

    formData.append('access_key', accessKey);
    // Optional: Add a subject
    formData.append('subject', 'Cram 웹사이트에서 새로운 문의가 도착했습니다.');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setErrorMessage(data.message || '전송 중 오류가 발생했습니다.');
      }
    } catch (error) {
      setFormStatus('error');
      setErrorMessage('네트워크 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-sans selection:bg-pink-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0f0f0f]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter">Cram</div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
            <a href="#system" className="hover:text-white transition-colors">출판사 소개</a>
            <a href="#guide" className="hover:text-white transition-colors">출판 가이드/인세</a>
            <a href="#contact" className="hover:text-white transition-colors">문의/견적</a>
            <a href="https://smartstore.naver.com/cram1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">북스토어</a>
          </div>
          <a href="#contact" className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-sm font-medium transition-all">
            지금 투고하기
          </a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-20 px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 tracking-tight">
            Cram과 함께<br />
            <span className="text-yellow-400">벼락치기 수험서</span><br />
            <span className="text-green-400">브랜드를 만들어가실</span><br />
            <span className="text-blue-400">작가님</span>을 찾습니다!
          </h1>
          <div className="flex items-center justify-center gap-4 mb-16">
            <a href="#contact" className="px-8 py-4 rounded-full bg-[#8a003c] hover:bg-[#a30047] text-white font-semibold transition-all inline-block">
              원고 투고하기
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full bg-[#3a0019] hover:bg-[#4d0022] text-white font-semibold transition-all inline-block">
              문의 사항
            </a>
          </div>
          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 relative aspect-[16/9]">
            <img 
              src="/벼락치기.jpg" 
              alt="벼락치기" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
          </div>
        </section>

        {/* System Intro Section */}
        <section id="system" className="py-24 px-6 scroll-mt-20">
          <div className="max-w-5xl mx-auto bg-[#141414] p-12 md:p-20 rounded-3xl border border-white/10 text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Cram만의 압도적인 출판 시스템</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              <span className="text-blue-400 font-bold">불필요한 절차를 생략</span>하고 오직 핵심만 담아<br/>
              가장 빠른 출판 서비스를 제공하고 있습니다.
            </p>
          </div>
        </section>

        {/* Lightning Speed Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-3xl overflow-hidden aspect-square border border-white/10">
                <img src="/편집.jpg" alt="Editing on Laptop" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-6">
                <div className="text-sm font-bold text-gray-400">초고속 편집</div>
                <h3 className="text-4xl md:text-5xl font-bold leading-tight">번개 같은 편집 속도</h3>
                <p className="text-gray-400 leading-relaxed">
                  복잡한 기획 단계 없이 핵심 내용만 추려내어<br/>
                  단기간에 완벽한 수험서로 탈바꿈시키는<br/>
                  Cram만의 독보적인 편집 노하우를 제공합니다.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-[#8a003c]" />
                    <span>당일 원고 검토 완료</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-[#8a003c]" />
                    <span>실시간 교정 교열 서비스</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto space-y-24">
            {/* Feature 1 - Cram's Publishing Guide */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-3xl overflow-hidden aspect-square border border-white/10">
                <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2000&auto=format&fit=crop" alt="Books" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-6">
                <div className="text-sm font-bold text-gray-400">직관적 가이드</div>
                <h3 className="text-4xl md:text-5xl font-bold leading-tight">Cram만의 출판 가이드</h3>
                <p className="text-gray-400 leading-relaxed">
                  피드백부터 편집, 인쇄까지 이어지는 복잡한 과정을 1:1밀착으로 제공하여,<br/>
                  누구나 쉽게 이해하고 따라올 수 있습니다.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-[#8a003c]" />
                    <span>1:1 밀착 편집</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-[#8a003c]" />
                    <span>신속한 인쇄 및 배송</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 2 - Transparent Royalty Structure */}
            <div id="royalty" className="flex flex-col items-center justify-center py-12 scroll-mt-20">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">투명한 인세 구조</h2>
                <p className="text-gray-400">대형 출판사의 불합리한 관행을 깨고, 저자의 노력을 정당하게 보상합니다.</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
                {/* Card 1 */}
                <div className="bg-[#141414] rounded-2xl p-10 text-center border border-white/10 flex flex-col justify-center h-full">
                  <div className="text-gray-400 font-medium mb-4">기존 대형 출판사</div>
                  <div className="text-5xl font-bold mb-6">8~10<span className="text-3xl">%</span></div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    높은 초기 비용과<br/>복잡한 유통망 유지비용 발생
                  </p>
                </div>
                
                {/* Card 2 */}
                <div className="bg-[#141414] rounded-2xl p-10 text-center border border-cyan-400/50 shadow-[0_0_15px_rgba(34,211,238,0.15)] flex flex-col justify-center h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400"></div>
                  <div className="text-cyan-400 font-bold mb-4">Cram (종이책)</div>
                  <div className="text-6xl font-bold mb-6">20~50<span className="text-4xl">%</span></div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    1인 출판 시스템으로<br/>제작 단가 절감 및 마진율 극대화
                  </p>
                </div>
                
                {/* Card 3 */}
                <div className="bg-[#141414] rounded-2xl p-10 text-center border border-yellow-400/50 shadow-[0_0_15px_rgba(250,204,21,0.15)] flex flex-col justify-center h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>
                  <div className="text-yellow-400 font-bold mb-4">Cram (전자책)</div>
                  <div className="text-6xl font-bold mb-6">30~60<span className="text-4xl">%</span></div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    인쇄/물류 비용 제로<br/>최고 수준의 저자 수익률 보장
                  </p>
                </div>
              </div>
              
              <div className="mt-12 text-xs text-gray-600">
                * 인세율은 원고의 완성도, 편집 난이도, 마케팅 지원 범위에 따라 협의 후 최종 결정됩니다.
              </div>
            </div>
          </div>
        </section>

        {/* Preferred Book Types */}
        <section id="guide" className="py-24 px-6 bg-[#1a000b] scroll-mt-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Cram이 선호하는 책 유형</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#0f0f0f] p-10 rounded-3xl border border-white/10 hover:border-[#8a003c]/50 transition-colors flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#8a003c]/20 rounded-full flex items-center justify-center mb-8 text-[#8a003c] font-bold text-2xl">1</div>
                <p className="text-xl md:text-2xl font-semibold leading-relaxed">기출문제를 기준으로 만든<br/>필기 요약 혹은 핵심 이론</p>
              </div>
              <div className="bg-[#0f0f0f] p-10 rounded-3xl border border-white/10 hover:border-[#8a003c]/50 transition-colors flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#8a003c]/20 rounded-full flex items-center justify-center mb-8 text-[#8a003c] font-bold text-2xl">2</div>
                <p className="text-xl md:text-2xl font-semibold leading-relaxed">기출문제를 목차별 흐름별 분류하여<br/>한 줄 해석을 첨가한 것</p>
              </div>
            </div>
          </div>
        </section>

        {/* Publishing Guide */}
        <section className="py-24 px-6 bg-[#141414]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">출판 가이드</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* 1. Cram만의 가성비 출판 */}
              <div className="bg-[#1a1a1a] p-10 rounded-3xl border border-white/5 hover:border-[#8a003c]/30 transition-colors">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-[#8a003c] rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">1</div>
                  <h3 className="text-2xl md:text-3xl font-bold">Cram만의 가성비 출판</h3>
                </div>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p className="text-lg">일단 최소한으로 30부만 인쇄하여 판매합니다.</p>
                  
                  <div className="bg-black/40 p-6 rounded-2xl border border-white/5 space-y-3">
                    <p><span className="text-[#8a003c] font-semibold">초기 비용:</span> 30부 약 30만원<br/><span className="text-sm text-gray-500">(페이지 수에 따라 달라질 수 있고 인쇄까지 과정 비용 포함 된 가격)</span></p>
                    <p><span className="text-[#8a003c] font-semibold">종이,전자책 합 90부까지 인세:</span> 종이책 30% / 전자책 40%</p>
                    <p><span className="text-[#8a003c] font-semibold">종이,전자책 합 90부 이후 인세:</span> 종이책 40% / 전자책 50%</p>
                  </div>
                  
                  <p className="font-bold text-white text-lg">91부부터 인쇄비 출판사에서 부담.</p>
                  
                  <p>함께 성장하기 위한 프로젝트로 출판사도 저자를 위해 투자를 하는 것이고<br/>저자도 출판사와 함께 윈윈하기 위해 성실히 임해주셔야 합니다.</p>
                  
                  <div className="bg-[#8a003c]/10 p-6 rounded-2xl border border-[#8a003c]/20 mt-6">
                    <p className="mb-2">그럼 총 저자가 드는 비용은 90부 인쇄비용 약 90만원</p>
                    <p>초기 비용은 30부 약 30만원이고 인세를 정산받아 나머지 60부에 충당하면 되므로 <strong className="text-white">부담없는 Cram만의 가성비 출판 프로젝트</strong> 입니다.</p>
                  </div>
                </div>
              </div>

              {/* 2. 기획출판 */}
              <div className="bg-[#1a1a1a] p-10 rounded-3xl border border-white/5 hover:border-[#8a003c]/30 transition-colors">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-[#8a003c] rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">2</div>
                  <h3 className="text-2xl md:text-3xl font-bold">기획출판</h3>
                </div>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p className="text-lg">원고의 내용이 좋고 출판사의 브랜드에 딱 맞을 경우<br/>출판사가 저자에게 투자하여 책을 제작합니다.</p>
                  
                  <p>저자는 초기 비용이 없다는 것이 장점이지만 그만큼 인세가 낮습니다.</p>
                  
                  <div className="bg-black/40 p-6 rounded-2xl border border-white/5 space-y-3 mt-8">
                    <p><span className="text-[#8a003c] font-semibold">종이,전자책 합 100부까지 인세:</span> 종이책 20% / 전자책 30%</p>
                    <p><span className="text-[#8a003c] font-semibold">종이,전자책 합 100부 이후 인세:</span> 종이책 30% / 전자책 40%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 px-6 bg-[#0f0f0f]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">성공적인 출판을 위한 맞춤형 서비스</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Ban, title: '주의 필독', desc: 'Cram은 벼락치기 전문 수험서로 내용이 많은 이론서를 만드시는 분과는 함께 할 수가 없습니다. 기출을 바탕으로 핵심 이론을 뽑거나 기출문제를 기반으로 한 수험서 제작을 하고 있습니다.' },
                { icon: FileText, title: '원고 교정', desc: '전문 편집자가 수험생의 눈높이에 맞춰 핵심 내용을 더욱 명확하게 다듬고 가독성을 극대화하여 합격으로 이끄는 최적의 텍스트를 구성해 드립니다.' },
                { icon: Flag, title: '표지 디자인', desc: '수험생들의 시선을 단번에 사로잡는 강렬하고 직관적인 디자인을 통해 도서의 가치를 높이고 구매 욕구를 자극하는 최상의 비주얼을 완성합니다.' },
                { icon: Receipt, title: '인쇄 관리', desc: '최신 인쇄 설비를 통해 고품질의 도서를 신속하게 제작하며 소량 인쇄부터 대량 인쇄까지 저자의 예산과 상황에 맞는 최적의 견적을 제안합니다.' },
                { icon: Settings, title: '유통 대행', desc: '국내 주요 온오프라인 서점 입점부터 재고 관리까지 복잡한 유통 과정을 Cram이 직접 관리하여 저자의 번거로움을 획기적으로 덜어드립니다.' },
                { icon: PieChart, title: '마케팅 지원', desc: '수험 커뮤니티와 SNS를 활용한 타겟 마케팅을 통해 타겟 독자들에게 도서가 효과적으로 노출될 수 있도록 전략적인 홍보 활동을 지원합니다.' },
              ].map((service, i) => (
                <div key={i} className="bg-[#1a1a1a] p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#8a003c] flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">저자들이 증명하는 Cram의 가치</h2>
              <p className="text-gray-400">
                Cram과 함께 출판의 꿈을 이룬 저자들의 생생한 후기를 통해<br/>
                Cram의 전문성과 신뢰도를 직접 확인해 보시기 바랍니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#1a1a1a] p-10 rounded-3xl border border-white/5 relative">
                <p className="text-gray-300 leading-relaxed mb-8 relative z-10">
                  Ex) 혼자 준비하기 막막했던 수험서 출판을 Cram 덕분에 한 달 만에 끝냈어요. 아저씨 사장님의 꼼꼼한 피드백과 빠른 일 처리에 정말 감동했습니다.
                </p>
                <div className="flex items-center gap-4">
                  <img src="https://i.pravatar.cc/150?img=1" alt="User" className="w-12 h-12 rounded-full object-cover" />
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                </div>
                <Quote className="absolute bottom-8 right-8 w-16 h-16 text-white/10 rotate-180" />
              </div>
              
              <div className="bg-[#1a1a1a] p-10 rounded-3xl border border-white/5 relative">
                <p className="text-gray-300 leading-relaxed mb-8 relative z-10">
                  Ex) 인세 정산이 정말 투명해서 믿음이 가요. 디자인도 제가 원했던 강렬한 느낌으로 잘 나와서 수험생들 사이에서 반응이 아주 뜨겁습니다. 강력 추천해요.
                </p>
                <div className="flex items-center gap-4">
                  <img src="https://i.pravatar.cc/150?img=5" alt="User" className="w-12 h-12 rounded-full object-cover" />
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                </div>
                <Quote className="absolute bottom-8 right-8 w-16 h-16 text-white/10 rotate-180" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 bg-[#141414]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
            <div className="space-y-10">
              <div>
                <h4 className="text-lg font-bold mb-3">출판 비용은 얼마나 드나요?</h4>
                <p className="text-gray-400">페이지 수와 부수에 따라 다르지만 업계 최저 수준의 합리적인 견적을 보장합니다.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-3">원고가 완벽하지 않아도 되나요?</h4>
                <p className="text-gray-400">네, 핵심 내용만 있다면 Cram의 전문 편집팀이 완벽한 수험서로 다듬어 드립니다.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-3">제작 기간은 얼마나 걸리나요?</h4>
                <p className="text-gray-400">원고 확정 후 인쇄까지 평균 2주 이내에 모든 공정이 완료되는 초고속 시스템입니다.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-3">인세 정산 주기는 어떻게 되나요?</h4>
                <p className="text-gray-400">매월 판매 실적을 투명하게 공개하며 익월 초에 바로 정산해 드리는 것을 원칙으로 합니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-24 px-6 scroll-mt-20">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">문의/견적/원고</h2>
            <p className="text-gray-400 mb-10 leading-relaxed">성함, 이메일, 제작하실 과목이나 책 이름, 문의사항을 적어주시면 이메일로 빠른 시간 내에 답변드립니다.</p>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-2">이름</label>
                <input type="text" name="name" required className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#8a003c] transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" name="email" required className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#8a003c] transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea name="message" required rows={4} className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#8a003c] transition-colors resize-none"></textarea>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" id="terms" required className="w-5 h-5 rounded border-white/20 bg-transparent text-[#8a003c] focus:ring-[#8a003c] focus:ring-offset-0" />
                <label htmlFor="terms" className="text-sm text-gray-400">이용 약관에 동의합니다.</label>
              </div>
              
              {formStatus === 'success' && (
                <div className="p-4 rounded-lg bg-green-500/20 text-green-400 text-sm">
                  성공적으로 메일이 전송되었습니다! 빠른 시일 내에 답변 드리겠습니다.
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="p-4 rounded-lg bg-red-500/20 text-red-400 text-sm">
                  {errorMessage}
                </div>
              )}

              <button 
                type="submit" 
                disabled={formStatus === 'submitting'}
                className="px-8 py-3 rounded-full bg-[#8a003c] hover:bg-[#a30047] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold transition-all"
              >
                {formStatus === 'submitting' ? '전송 중...' : '보내기'}
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 pt-16 pb-8 px-6 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Cram</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Cram은 단 하루의 기적을 만드는 벼락치기 수험서 브랜드로,<br/>
              핵심만을 짚어주는 가장 빠른 합격 가이드를 제공하는 책을 제작합니다.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400 mb-6">
              <li>cram202512@naver.com</li>
              <li>0502-1937-2027</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-gray-500">
          <p>© 2025 Cram은 저자 여러분들을 항상 응원합니다!</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span>Terms & Conditions</span>
            <span>,</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
