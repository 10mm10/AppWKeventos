import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f5f5f5' 
  },
  header: { 
    paddingTop: 60, 
    paddingBottom: 30, 
    backgroundColor: '#2563eb', 
    alignItems: 'center',
    elevation: 4, // Sombra no Android
  },
  title: { 
    color: '#fff', 
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
  input: { 
    backgroundColor: '#fff', 
    padding: 12, 
    borderRadius: 8, 
    borderWidth: 1, 
    borderColor: '#d1d5db', 
    marginBottom: 20,
    fontSize: 16
  },
  button: { 
    backgroundColor: '#059669', 
    padding: 16, 
    borderRadius: 8, 
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 16 
  },
  // ... (mantenha o que já existia e adicione estes abaixo)
  itemCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#059669',
    // Sombra para dar profundidade
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  itemTextNome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  itemTextValores: {
    fontSize: 14,
    color: '#4b5563',
    marginTop: 4,
  },
  custoBadge: {
    color: '#9ca3af',
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#374151',
    marginTop: 20,
    marginBottom: 10,
  },
  // ... (mantenha os anteriores e adicione estes)
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // Fundo escurecido
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
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
    color: '#2563eb',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  buttonCancel: {
    backgroundColor: '#ef4444',
    padding: 15,
    borderRadius: 8,
    flex: 0.48,
    alignItems: 'center',
  },
  buttonSave: {
    backgroundColor: '#059669',
    padding: 15,
    borderRadius: 8,
    flex: 0.48,
    alignItems: 'center',
  },
  // ... (mantenha os anteriores e adicione estes)
  footer: {
    padding: 20,
    backgroundColor: '#fff',
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
    color: '#059669',
  },
  buttonPDF: {
    backgroundColor: '#2563eb',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  // ... (mantenha os anteriores e adicione estes)
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
    color: '#2563eb',
    fontWeight: 'bold',
  },
  deleteBtn: {
    color: '#ef4444',
    fontWeight: 'bold',
  }

});