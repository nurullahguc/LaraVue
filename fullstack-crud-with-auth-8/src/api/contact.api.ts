import {apiClient} from "@/common/http-common";
import {Contact} from "@/models/contact.model";

export default class ContactService {

    getContacts = async (): Promise<any> => {
        return await apiClient.get('/api/with_auth/contacts');
    };

    createContact = async (contact: Contact): Promise<any> => {
        return await apiClient.post('/api/with_auth/save_contact', contact);
    }

    updateContact = async (contact: Contact): Promise<any> => {
        return await apiClient.post('/api/with_auth/update_contact/' + contact.id, contact);
    }

    getContact = async (id: number | string): Promise<any> => {
        return await apiClient.get('/api/with_auth/get_contact/' + id)
    }

    deleteContact = async (id: number | string): Promise<any> => {
        return await apiClient.post('/api/with_auth/delete_contact/' + id)
    }

}

export const contactService = new ContactService()