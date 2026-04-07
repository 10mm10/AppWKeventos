import { StyleSheet } from 'react-native';

// --- PALETA DE CORES WK EVENTOS (Extraída da Logo) ---
const WK_VERMELHO = '#8B221B'; // Vermelho da faixa/laço
const WK_AMARELO = '#EBD84B';  // Amarelo do escudo
const WK_CHUMBO = '#211E1D';   // Preto/Chumbo da borda
const WK_FUNDO = '#F5F5F5';    // Cinza claro para o fundo
const WK_BRANCO = '#FFFFFF';   // Branco puro para cards/modal

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: WK_FUNDO, 
  },
  header: { 
    paddingTop: 60, 
    paddingBottom: 30, 
    backgroundColor: WK_VERMELHO, // Atualizado para o Vermelho WK
    alignItems: 'center',
    elevation: 4, 
  },
  title: { 
    color: WK_BRANCO, 
    fontSize: 22, 
    fontWeight: 'bold' 
  },
  form: { 
    padding: 20 
  },
  label: { 
    fontSize: 16, 
    fontWeight: '600', 
    marginBottom: 8, 
    color: '#374151', // Mantido para boa legibilidade
  },
  input: { 
    backgroundColor: WK_BRANCO, 
    padding: 12, 
    borderRadius: 8, 
    borderWidth: 1, 
    borderColor: '#d1d5db', // Mantido o cinza discreto da borda
    marginBottom: 20,
    fontSize: 16,
    color: WK_CHUMBO, // Texto digitado na cor Chumbo
  },
  button: { 
    backgroundColor: WK_VERMELHO, // Botão principal em Vermelho WK
    padding: 16, 
    borderRadius: 8, 
    alignItems: 'center',
    marginTop: 10,
    // Sombra sutil com a cor de contraste
    elevation: 2,
    shadowColor: WK_CHUMBO,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  buttonText: { 
    color: WK_BRANCO, 
    fontWeight: 'bold', 
    fontSize: 16 
  },
  itemCard: {
    backgroundColor: WK_BRANCO,
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: WK_AMARELO, // Badges e bordas de destaque em Amarelo WK
    // Sombra mantida
    elevation: 2,
    shadowColor: WK_CHUMBO,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  itemTextNome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: WK_CHUMBO, // Texto de título em Chumbo WK
  },
  itemTextValores: {
    fontSize: 14,
    color: '#4b5563', // Mantido
    marginTop: 4,
  },
  custoBadge: {
    color: '#9ca3af', // Mantido
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: WK_CHUMBO, // Títulos de seção em Chumbo WK
    marginTop: 20,
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: WK_BRANCO,
    width: '90%',
    padding: 20,
    borderRadius: 15,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: WK_VERMELHO, // Título do Modal em Vermelho WK
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  buttonCancel: {
    backgroundColor: '#ef4444', // Mantido o vermelho de erro padrão
    padding: 15,
    borderRadius: 8,
    flex: 0.48,
    alignItems: 'center',
  },
  buttonSave: {
    backgroundColor: WK_VERMELHO, // Botão de salvar em Vermelho WK
    padding: 15,
    borderRadius: 8,
    flex: 0.48,
    alignItems: 'center',
  },
  footer: {
    padding: 20,
    backgroundColor: WK_BRANCO,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  totalLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  totalValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: WK_VERMELHO, // Total final em Vermelho WK para destaque
  },
  buttonPDF: {
    backgroundColor: WK_VERMELHO, // Botões de PDF em Vermelho WK
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  editBtn: {
    color: '#2563eb', // Mantido o azul padrão de link para edição
    fontWeight: 'bold',
  },
  deleteBtn: {
    color: '#ef4444', // Mantido o vermelho padrão para exclusão
    fontWeight: 'bold',
  }
});