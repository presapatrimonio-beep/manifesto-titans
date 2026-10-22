import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export interface ExportProgressCallback {
  (current: number, total: number, message: string): void;
}

/**
 * Exports all slides rendered in the DOM to a high-definition 16:9 PDF file.
 */
export async function exportSlidesToPDF(
  slideElements: HTMLElement[],
  onProgress?: ExportProgressCallback
): Promise<void> {
  const total = slideElements.length;
  if (total === 0) {
    throw new Error('Nenhum slide encontrado para exportação.');
  }

  // Create a 16:9 landscape PDF in 1920x1080 px coordinates
  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'px',
    format: [1920, 1080],
    compress: true,
  });

  for (let i = 0; i < total; i++) {
    const el = slideElements[i];
    if (onProgress) {
      onProgress(i + 1, total, `Processando slide ${i + 1} de ${total}...`);
    }

    // Capture using html2canvas with high-fidelity rendering
    const canvas = await html2canvas(el, {
      scale: 1.5, // 1.5x resolution for crisp high-dpi text and graphics
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#080808',
      logging: false,
      windowWidth: 1920,
      windowHeight: 1080,
    });

    const imgData = canvas.toDataURL('image/jpeg', 0.95);

    if (i > 0) {
      pdf.addPage([1920, 1080], 'landscape');
    }

    pdf.addImage(imgData, 'JPEG', 0, 0, 1920, 1080, undefined, 'FAST');
  }

  if (onProgress) {
    onProgress(total, total, 'Compilando arquivo PDF final...');
  }

  pdf.save('TITANS_SOCIETY_Apresentacao_Institucional_16x9.pdf');
}
