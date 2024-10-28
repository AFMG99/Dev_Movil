import { ACCESS_TOKEN } from '../../config.json';

export const fetchPaymentMethods = async () => {
    try {
        const response = await fetch('https://api.mercadopago.com/v1/payment_methods', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${ACCESS_TOKEN}`
            }
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching payment methods:', error);
        return [];
    }
};
