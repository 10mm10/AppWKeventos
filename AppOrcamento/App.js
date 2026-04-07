import React, { useState } from 'react';
import { 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  StatusBar, 
  Modal 
} from 'react-native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { styles } from './src/styles/styles';
import { Asset } from 'expo-asset';

export default function App() {
  const logoEmpresa = Asset.fromModule(require('./assets/logo.png')).uri;

  const [cliente, setCliente] = useState('');
  const [evento, setEvento] = useState('');
  const [dataEvento, setDataEvento] = useState('');
  const [horaEvento, setHoraEvento] = useState('');
  const [desconto, setDesconto] = useState(''); // NOVO ESTADO PARA DESCONTO
  const [itens, setItens] = useState([]);

  const [modalVisivel, setModalVisivel] = useState(false);
  const [itemSendoEditado, setItemSendoEditado] = useState(null);
  const [nomeItem, setNomeItem] = useState('');
  const [custoItem, setCustoItem] = useState('');
  const [vendaItem, setVendaItem] = useState('');

  // CÁLCULOS COM DESCONTO
  const somaItensVenda = itens.reduce((acc, item) => acc + item.venda, 0);
  const totalCusto = itens.reduce((acc, item) => acc + item.custo, 0);
  const valorDesconto = parseFloat(desconto.replace(',', '.')) || 0;
  
  const totalFinalVenda = somaItensVenda - valorDesconto;
  const lucroTotal = totalFinalVenda - totalCusto;

  const formatarData = (text) => {
    let cleaned = text.replace(/\D/g, '');
    if (cleaned.length > 8) cleaned = cleaned.substring(0, 8);
    if (cleaned.length > 4) {
      return cleaned.replace(/^(\d{2})(\d{2})(\d{4}).*/, '$1/$2/$3');
    } else if (cleaned.length > 2) {
      return cleaned.replace(/^(\d{2})(\d{0,2}).*/, '$1/$2');
    }
    return cleaned;
  };

  const formatarHora = (text) => {
    let cleaned = text.replace(/\D/g, '');
    if (cleaned.length > 4) cleaned = cleaned.substring(0, 4);
    if (cleaned.length > 2) {
      return cleaned.replace(/^(\d{2})(\d{0,2}).*/, '$1:$2');
    }
    return cleaned;
  };

  const cssFolhaUnica = `
    <style>
      @page { size: A4; margin: 0; }
      body { 
        margin: 0; 
        padding: 40px; 
        box-sizing: border-box; 
        height: 100vh;
        display: flex;
        flex-direction: column;
      }
      .conteudo-principal { flex: 1; }
      * { page-break-inside: avoid; }
    </style>
  `;

  const obterHtmlEmpresa = () => `
    <html>
      <head>${cssFolhaUnica}</head>
      <body style="font-family: sans-serif; padding: 20px; color: #1e293b;">
        <div class="conteudo-principal">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            <h1 style="color: #2563eb; margin: 0;">WK Eventos - Relatório Interno</h1>
            <img src="${logoEmpresa}" style="height: 200px;" />
          </div>
          <p><strong>Cliente:</strong> ${cliente || '---'}</p>
          <p><strong>Evento:</strong> ${evento || '---'}</p>
          <p><strong>Data:</strong> ${dataEvento || '---'} às ${horaEvento || '---'}</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <thead>
              <tr style="background: #2563eb; color: white;">
                <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Item</th>
                <th style="padding: 12px; border: 1px solid #ddd;">Custo</th>
                <th style="padding: 12px; border: 1px solid #ddd;">Venda Bruta</th>
                <th style="padding: 12px; border: 1px solid #ddd;">Lucro Unit.</th>
              </tr>
            </thead>
            <tbody>
              ${itens.map((item, index) => `
                <tr style="background: ${index % 2 === 0 ? '#ffffff' : '#f8fafc'};">
                  <td style="padding: 10px; border: 1px solid #ddd;">${item.nome}</td>
                  <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">${item.custo.toFixed(2)}</td>
                  <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">${item.venda.toFixed(2)}</td>
                  <td style="padding: 10px; border: 1px solid #ddd; text-align: center; font-weight: bold; color: #059669;">${(item.venda - item.custo).toFixed(2)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        <div style="margin-top: 20px; padding: 20px; background: #f1f5f9; border-radius: 10px;">
          <p style="margin: 5px 0;">Subtotal: R$ ${somaItensVenda.toFixed(2)}</p>
          <p style="margin: 5px 0; color: #ef4444;">Desconto Aplicado: - R$ ${valorDesconto.toFixed(2)}</p>
          <p style="font-size: 18px; margin: 5px 0;"><strong>Total Final (Venda):</strong> R$ ${totalFinalVenda.toFixed(2)}</p>
          <p style="font-size: 18px; margin: 5px 0; color: #2563eb;"><strong>Meu Lucro Líquido:</strong> R$ ${lucroTotal.toFixed(2)}</p>
        </div>
      </body>
    </html>
  `;

  const obterHtmlCliente = () => `
    <html>
      <head>${cssFolhaUnica}</head>
      <body style="font-family: sans-serif; padding: 40px; color: #334155;">
        <div class="conteudo-principal">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            <h1 style="color: #2563eb; margin: 10px; align-items: center;">WK Eventos </h1>
            <img src="${logoEmpresa}" style="height: 200px;" />
          </div>
          <div style="margin-top: 40px;">
            <p style="font-size: 18px;"><strong>Prezado(a) ${cliente},</strong></p>
            <p>Abaixo seguem os detalhes da proposta para o evento: <strong>${evento}</strong></p>
            <p>Data prevista: <strong>${dataEvento}</strong> às <strong>${horaEvento}</strong></p>
          </div>
          <div style="background: #f8fafc; padding: 15px; font-weight: bold; border: 1px solid #e2e8f0; color: #2563eb;">Serviços e Equipamentos:</div>
          <div style="border: 1px solid #e2e8f0; border-top: none; padding: 20px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
            ${itens.map(item => `
              <div style="display: flex; align-items: center; border-bottom: 1px solid #f1f5f9; padding-bottom: 8px;">
                <span style="color: #059669; font-size: 18px; margin-right: 10px;">✔</span>
                <span style="font-size: 16px;">${item.nome}</span>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div style="margin-top: 30px; text-align: right; padding: 25px; background: #2563eb; color: white; border-radius: 15px;">
          <p style="margin: 0; font-size: 14px; opacity: 0.8;">Valor Total do evento: R$ ${somaItensVenda.toFixed(2)}</p>
          ${valorDesconto > 0 ? `<p style="margin: 5px 0; font-size: 16px; color: #4ade80; font-weight: bold;">Desconto Especial: - R$ ${valorDesconto.toFixed(2)}</p>` : ''}
          <span style="font-size: 18px; opacity: 0.9;">Investimento Final do evento:</span>
          <h1 style="margin: 5px 0; font-size: 36px;">R$ ${totalFinalVenda.toFixed(2)}</h1>
        </div>

        <p style="text-align: center; margin-top: 40px; font-size: 20px; color: #94a3b8;">WK Eventos | Gerado em ${new Date().toLocaleDateString('pt-BR')}</p>
        <p style="text-align: center; margin-top: 5px; font-size: 20px; color: #94a3b8;">Proposta valida por 30 dias.</p>
      </body>
    </html>
  `;

  const visualizarPdf = async (tipo) => {
    const html = tipo === 'cliente' ? obterHtmlCliente() : obterHtmlEmpresa();
    await Print.printAsync({ html });
  };

  const enviarPdf = async (tipo) => {
    const html = tipo === 'cliente' ? obterHtmlCliente() : obterHtmlEmpresa();
    const { uri } = await Print.printToFileAsync({ html });
    await Sharing.shareAsync(uri);
  };

  const salvarItem = () => {
    if (!nomeItem || !custoItem || !vendaItem) return;
    const dados = {
      nome: nomeItem,
      custo: parseFloat(custoItem.replace(',', '.')),
      venda: parseFloat(vendaItem.replace(',', '.')),
    };
    if (itemSendoEditado) {
      setItens(itens.map(i => i.id === itemSendoEditado ? { ...i, ...dados } : i));
    } else {
      setItens([...itens, { id: Math.random().toString(), ...dados }]);
    }
    setModalVisivel(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}><Text style={styles.title}>WK Eventos</Text></View>

      <ScrollView style={styles.form}>
        <Text style={styles.label}>Cliente</Text>
        <TextInput style={styles.input} placeholder="Nome do Cliente" value={cliente} onChangeText={setCliente} />
        
        <Text style={styles.label}>Evento</Text>
        <TextInput style={styles.input} placeholder="Tipo de Evento" value={evento} onChangeText={setEvento} />

        <View style={{ flexDirection: 'row', gap: 15 }}>
          <View style={{ flex: 2 }}>
            <Text style={styles.label}>Data</Text>
            <TextInput 
              style={styles.input} 
              placeholder="DD/MM/AAAA" 
              value={dataEvento} 
              onChangeText={(text) => setDataEvento(formatarData(text))} 
              keyboardType="numeric"
              maxLength={10}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Hora</Text>
            <TextInput 
              style={styles.input} 
              placeholder="00:00" 
              value={horaEvento} 
              onChangeText={(text) => setHoraEvento(formatarHora(text))} 
              keyboardType="numeric"
              maxLength={5}
            />
          </View>
        </View>

        <Text style={styles.sectionTitle}>Itens Adicionados ({itens.length})</Text>
        
        {itens.map((item) => (
          <View key={item.id} style={styles.itemCard}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.itemTextNome}>{item.nome}</Text>
              <View style={{ flexDirection: 'row', gap: 15 }}>
                <TouchableOpacity onPress={() => {
                  setItemSendoEditado(item.id);
                  setNomeItem(item.nome);
                  setCustoItem(item.custo.toString());
                  setVendaItem(item.venda.toString());
                  setModalVisivel(true);
                }}>
                  <Text style={{ color: '#2563eb', fontWeight: 'bold' }}>EDITAR</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setItens(itens.filter(i => i.id !== item.id))}>
                  <Text style={{ color: '#ef4444', fontWeight: 'bold' }}>EXCLUIR</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.itemTextValores}>Venda: R$ {item.venda.toFixed(2)} | <Text style={styles.custoBadge}>Custo: R$ {item.custo.toFixed(2)}</Text></Text>
          </View>
        ))}

        <TouchableOpacity style={styles.button} onPress={() => {
          setItemSendoEditado(null);
          setNomeItem(''); setCustoItem(''); setVendaItem('');
          setModalVisivel(true);
        }}>
          <Text style={styles.buttonText}>+ Adicionar Item</Text>
        </TouchableOpacity>

        {/* CAMPO DE DESCONTO NO FORMULÁRIO */}
        <View style={{ marginTop: 15 }}>
          <Text style={styles.label}>Desconto Especial (R$)</Text>
          <TextInput 
            style={[styles.input, { color: '#ef4444', fontWeight: 'bold'}]} 
            placeholder="0,00" 
            value={desconto} 
            onChangeText={setDesconto} 
            keyboardType="numeric"
          />
        </View>

        {itens.length > 0 && (
          <View style={{ marginTop: 25, paddingBottom: 50 }}>
            <Text style={{ fontWeight: 'bold', color: '#475569' }}>RELATÓRIO INTERNO (WK):</Text>
            <View style={{ flexDirection: 'row', gap: 10, marginTop: 8 }}>
               <TouchableOpacity style={[styles.buttonPDF, { flex: 1, backgroundColor: '#64748b' }]} onPress={() => visualizarPdf('empresa')}>
                 <Text style={styles.buttonText}>Ver</Text>
               </TouchableOpacity>
               <TouchableOpacity style={[styles.buttonPDF, { flex: 2 }]} onPress={() => enviarPdf('empresa')}>
                 <Text style={styles.buttonText}>Gerar Relatório</Text>
               </TouchableOpacity>
            </View>
            <Text style={{ fontWeight: 'bold', color: '#475569', marginTop: 20 }}>PROPOSTA PARA CLIENTE:</Text>
            <View style={{ flexDirection: 'row', gap: 10, marginTop: 8 }}>
               <TouchableOpacity style={[styles.buttonPDF, { flex: 1, backgroundColor: '#64748b' }]} onPress={() => visualizarPdf('cliente')}>
                 <Text style={styles.buttonText}>Revisar</Text>
               </TouchableOpacity>
               <TouchableOpacity style={[styles.buttonPDF, { flex: 2, backgroundColor: '#7c3aed' }]} onPress={() => enviarPdf('cliente')}>
                 <Text style={styles.buttonText}>Enviar Proposta</Text>
               </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>

      <View style={styles.footer}>
        <View><Text style={styles.totalLabel}>Total Cliente</Text><Text style={styles.totalValue}>R$ {totalFinalVenda.toFixed(2)}</Text></View>
        <View style={{ alignItems: 'flex-end' }}><Text style={styles.totalLabel}>Meu Lucro</Text><Text style={{ color: '#2563eb', fontWeight: 'bold', fontSize: 18 }}>R$ {lucroTotal.toFixed(2)}</Text></View>
      </View>

      <Modal visible={modalVisivel} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{itemSendoEditado ? 'Editar Item' : 'Novo Item'}</Text>
            <TextInput style={styles.input} placeholder="Descrição" value={nomeItem} onChangeText={setNomeItem} />
            <TextInput style={styles.input} placeholder="Custo R$" keyboardType="numeric" value={custoItem} onChangeText={setCustoItem} />
            <TextInput style={styles.input} placeholder="Venda R$" keyboardType="numeric" value={vendaItem} onChangeText={setVendaItem} />
            <View style={styles.buttonGroup}>
              <TouchableOpacity style={styles.buttonCancel} onPress={() => setModalVisivel(false)}><Text style={styles.buttonText}>Sair</Text></TouchableOpacity>
              <TouchableOpacity style={styles.buttonSave} onPress={salvarItem}><Text style={styles.buttonText}>Salvar</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}