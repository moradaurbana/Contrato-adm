import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { pdf } from '@react-pdf/renderer';
import { Download, Loader2 } from 'lucide-react';

import { ContractData, defaultContractData } from './types';
import { SidebarForm } from './components/SidebarForm';
import { ContractTemplate } from './components/ContractTemplate';
import { ContractPDF } from './components/ContractPDF';

export default function App() {
  const [isGenerating, setIsGenerating] = useState(false);
  
  const {
    register,
    watch,
    formState: { errors },
    reset,
  } = useForm<ContractData>({
    defaultValues: defaultContractData,
    mode: 'onChange',
  });

  const formData = watch();

  const handleGeneratePdf = async () => {
    setIsGenerating(true);
    try {
      // Gera o blob do PDF perfeitamente formatado e com textos selecionáveis
      const blob = await pdf(<ContractPDF data={formData} />).toBlob();
      
      // Cria a url para download automático
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Contrato_Administracao_${formData.contratanteNome.replace(/\s+/g, '_') || 'Morada_Urbana'}.pdf`;
      document.body.appendChild(link);
      link.click();
      
      // Limpeza
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Ocorreu um erro ao gerar o PDF. Tente novamente.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="h-screen w-full bg-[#0a0a0a] text-slate-300 flex flex-col font-sans overflow-hidden print:bg-white print:text-black print:h-auto print:overflow-visible">
      
      {/* Header */}
      <header className="h-16 border-b border-white/5 bg-[#121212] flex items-center justify-between px-8 shrink-0 print:hidden">
        <div className="flex items-center space-x-3">
          <img src={`${import.meta.env.BASE_URL}icon_app_dark_1024.png`} alt="Logo" className="w-8 h-8 object-contain rounded" />
          <h1 className="text-lg font-medium tracking-tight text-white">Morada Urbana <span className="text-slate-500 font-light">| Gerador Pro</span></h1>
        </div>
        <div className="flex items-center space-x-6 text-sm font-medium">
          <span className="text-amber-500">Editor de Contratos</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex overflow-hidden print:overflow-visible">
        
        {/* Sidebar - Form */}
        <aside className="w-[400px] shrink-0 border-r border-white/5 bg-[#121212] flex flex-col z-10 print:hidden">
          <div className="flex-1 overflow-hidden">
            <SidebarForm register={register} errors={errors} reset={reset} formData={formData} />
          </div>
        </aside>

        {/* Document Preview */}
        <section className="flex-1 bg-[#0a0a0a] overflow-y-auto relative scroll-smooth custom-scrollbar print:bg-white print:p-0 print:overflow-visible print:w-full">
          <div className="p-8 flex flex-col items-center print:p-0 print:block">
            <div className="w-[800px] mb-4 flex justify-between items-center shrink-0 print:hidden">
              <h2 className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Pré-visualização do Documento</h2>
              <span className="text-xs border border-white/10 text-slate-400 px-2 py-1 rounded font-medium bg-[#1a1a1a]">Atualização em tempo real</span>
            </div>
            
            {/* 
              By adding shrink-0 to this container, we prevent flexbox from squishing it 
              when its contents are taller than the viewport, enabling the parent section to scroll properly.
            */}
            <div className="shadow-2xl mx-auto rounded-sm overflow-hidden bg-white border border-white/10 relative mb-20 shrink-0 print:shadow-none print:border-none print:m-0 print:w-full print:max-w-none print:bg-white" style={{ width: '800px' }}>
              <div className="absolute top-0 left-0 w-full h-1 bg-amber-600 z-10 print:hidden"></div>
              <div className="bg-white print:w-full">
                <ContractTemplate data={formData} />
              </div>
            </div>
          </div>
        </section>
        
      </main>

      {/* Footer */}
      <footer className="h-14 bg-[#121212] border-t border-white/5 flex items-center justify-between px-8 shrink-0 z-20 print:hidden">
        <div className="flex items-center space-x-4 text-xs text-slate-500">
          <span>Versão 1.0.0</span>
          <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
          <span>Visto Jurídico Aprovado</span>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={handleGeneratePdf}
            disabled={isGenerating}
            className="bg-amber-600 hover:bg-amber-500 text-black font-bold px-6 py-2 rounded text-xs flex items-center space-x-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>GERANDO...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>EXPORTAR EM PDF</span>
              </>
            )}
          </button>
        </div>
      </footer>
      
    </div>
  );
}
