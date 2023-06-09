import axios from 'axios';

export const updateOmniChatOrderStatus = async (orderId: string, status: string, message: string) => {
  await axios.post(`https://orders-api.omni.chat/v2/orders/${orderId}/statusChange`, {
      responsible: "INFORME_AQUI_O_NOME_DO_GATEWAY", // nome do gateway (sistema de gerenciamento de pedidos, ERP, commerce), ex: vtex, herval, linx, etc 
      status: status,
      message: message
    }, {
      headers: {
        Authorization: "Bearer SUA_API_SECRET" // VC DEVE GERAR ESSA API SECRET ATRAVÉS DO PAINEL DE CONFIGURAÇÕES OMNICHAT, também recomendamos deixar salva em um banco de dados ao invés de ficar fixa no código, para caso necessidade atualização
      }
  });
};