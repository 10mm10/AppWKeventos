import { StyleSheet } from 'react-native';

// --- PALETA DE CORES WK EVENTOS ---
const WK_VERMELHO = '#8B221B';
const WK_AMARELO = '#EBD84B';
const WK_CHUMBO = '#211E1D';
const WK_FUNDO = '#F5F5F5';
const WK_BRANCO = '#FFFFFF';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: WK_FUNDO },
  header: {
    paddingTop: 60, paddingBottom: 30,
    backgroundColor: WK_VERMELHO, alignItems: 'center', elevation: 4
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
    color: '#374151'
  },

  // Inputs
  input: {
    backgroundColor: WK_BRANCO,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d1d5db',
    marginBottom: 20,
    fontSize: 16,
    color: WK_CHUMBO
  },
  inputInsumos: {
    height: 100,
    textAlignVertical: 'top' // Para o campo de texto grande
  },
  inputDestaque:
  {
    color: '#ef4444',
    fontWeight: 'bold'
  },

  // Botões
  button: {
    backgroundColor: WK_VERMELHO,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    elevation: 2
  },
  buttonText: {
    color: WK_BRANCO,
    fontWeight: 'bold',
    fontSize: 16
  },

  // Estrutura de Grid/Layout (Novas)
  row: {
    flexDirection: 'row',
    gap: 15
  },
  rowSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  flex1: {
    flex: 1
  },
  flex2: {
    flex: 2
  },
  alignEnd: {
    alignItems: 'flex-end'
  },

  // Cards de Itens
  itemCard: {
    backgroundColor: WK_BRANCO,
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: WK_AMARELO,
    elevation: 2
  },
  itemTextNome: { fontSize: 16, fontWeight: 'bold', color: WK_CHUMBO },
  itemTextInsumos: { fontSize: 12, color: '#64748b', marginTop: 2 },
  itemTextValores: { fontSize: 14, color: '#4b5563', marginTop: 4 },
  custoBadge: { color: '#9ca3af', fontSize: 12 },

  // Ações no Card
  actionButtons: { flexDirection: 'row', gap: 15 },
  editBtn: { color: '#2563eb', fontWeight: 'bold' },
  deleteBtn: { color: '#ef4444', fontWeight: 'bold' },

  // Seções de PDF (Novas)
  pdfSection: { marginTop: 25, paddingBottom: 50 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: WK_CHUMBO, marginTop: 20, marginBottom: 10 },
  pdfLabel: { fontWeight: 'bold', color: '#475569', marginTop: 15, marginBottom: 5 },
  buttonPDF: {
    backgroundColor: WK_VERMELHO, padding: 15, borderRadius: 8,
    alignItems: 'center', flex: 1
  },
  btnVer: { backgroundColor: '#64748b', flex: 0.5 },
  btnProposta: { backgroundColor: '#25c509', flex: 1 },

  // Modal
  modalContainer: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  modalContent: { backgroundColor: WK_BRANCO, width: '90%', padding: 20, borderRadius: 15, elevation: 10 },
  modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 15, textAlign: 'center', color: WK_VERMELHO },
  buttonGroup: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  buttonCancel: { backgroundColor: '#ef4444', padding: 15, borderRadius: 8, flex: 0.48, alignItems: 'center' },
  buttonSave: { backgroundColor: WK_VERMELHO, padding: 15, borderRadius: 8, flex: 0.48, alignItems: 'center' },

  // Footer
  footer: {
    padding: 20, backgroundColor: WK_BRANCO, borderTopWidth: 1,
    borderTopColor: '#e5e7eb', flexDirection: 'row',
    justifyContent: 'space-between', alignItems: 'center', marginBottom: 50
  },
  totalLabel: { fontSize: 14, color: '#6b7280' },
  totalValue: { fontSize: 22, fontWeight: 'bold', color: WK_VERMELHO },
  lucroValue: { color: '#2563eb', fontWeight: 'bold', fontSize: 18 },
});