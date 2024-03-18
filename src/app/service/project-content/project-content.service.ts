import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Storage } from '@ionic/storage-angular';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectContentService {

  public messageSubject: Subject<any[]> = new Subject();
  private messages: any[] = [];

  constructor(private firestore: AngularFirestore, private storage: Storage) { }

  getMessages(company:string, project:string) {
    this.getDataFromFirebase(company, project);
  }

  addMessage(message: any) {
    this.addDataToFirebase(message);
  }

  async getDataFromFirebase(company: string, project: string): Promise<void> {
    try {
      const messagesCollection = this.firestore.collection('timesheet'); // Reference the collection

      // Build a query (as in the previous response)
      let query = messagesCollection

      // Get the documents (or a snapshot if you need real-time updates)
      const snapshot = await query.ref.where('company', '==', company).where('project', '==', project).get();

      // Clear existing messages to avoid duplicates (optional)
      this.messages = [];

      // Extract data from each document and add it to the local messages array
      snapshot.forEach((doc) => {
        const data = doc.data();
        this.messages.push(data);
      });

      // Send the updated messages through the subject (if applicable)
      this.messageSubject.next(this.messages);
    } catch (error) {
      console.error('Error fetching data from Firebase:', error);
      // Handle errors appropriately (e.g., display an error message to the user)
    }
  }

  async addDataToFirebase(data: any): Promise<void> {
    try {
      const messagesCollection = this.firestore.collection('timesheet'); // Reference the collection
      
      // Add the data as a new document (replace 'id' with a generated ID or use `add` for auto-generated ID)
      await messagesCollection.add(data);

      // Optionally, update the local messages array to reflect the change
      // (You might not need this if the UI updates automatically based on the subject)
      this.messages.push(data);  // Assuming `messages` is an array
      this.messageSubject.next(this.messages);  // Send the updated messages
    } catch (error) {
      console.error('Error adding data to Firebase:', error);
      // Handle errors appropriately
    }
  }

}
