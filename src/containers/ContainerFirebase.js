import admin from "firebase-admin";
import moment from "moment";
import config from "../config.js";

admin.initializeApp({
    credential: admin.credential.cert(config.firebase),
    databaseURL: `https://${config.firebase.project_id}.firebaseio.com`
});
const db = admin.firestore();

export default class ContainerFirebase {
    constructor(collectionName) {
        this.collection = db.collection(collectionName);
    }

    async save(elem) {
        try {
            const timestamp = moment(new Date()).format('DD/MM/YY HH:mm');
            const newElem = {...elem, timestamp: timestamp};
            const doc = this.collection.doc();
            await doc.create(newElem);
            console.log("Documento guardado con éxito");
        } catch (error) {
            console.log(error)
        }
    }

    async getAll() {
        const result = []
        try {
            const snapshot = await this.collection.get();
            snapshot.forEach(doc => {
                result.push({id: doc.id, ...doc.data()})
            });
            return result;
        } catch (error) {
            console.log(error)
        }
    }

    async getById(id) {
        try {
            const doc = this.collection.doc(id);
            const elem = await doc.get();
            return elem.data();
        } catch(error) {
            console.log(error)
        }
    }

    async update(elem, id) {
        try {
            const timestamp = moment(new Date()).format('DD/MM/YY HH:mm');
            const newElem = {...elem, timestamp: timestamp};
            const doc = this.collection.doc(id);
            await doc.update(newElem);
        } catch (error) {
            console.log(error);
        }
    }

    async deleteById(id) {
        try {
            const doc = this.collection.doc(id);
            await doc.delete()
            console.log("Documento eliminado con exito")
        } catch (error) {
            console.log(error);
        }
    }

    async deleteAll() {
        try {
            const docs = await this.getAll()
            const ids = docs.map(doc=>doc.id)
            const deleteDocs = ids.map(id => this.deleteById(id))
            await Promise.allSettled(deleteDocs)
            console.log("Se eliminaron todos los documentos");
        } catch (error) {
            console.log(error);
        }
    }
}