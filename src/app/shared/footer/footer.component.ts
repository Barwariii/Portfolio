import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  // onSubmit(ngForm: NgForm) {
  //   if (ngForm.valid && ngForm.submitted) {
  //     console.log(this.contactData);
  //   }
  // }

  mailTest = false;

  // post = {
  //   // endPoint: 'https://deineDomain.de/sendMail.php',
  //   endPoint: 'https://portfolio-bilal.com/sendMail.php',
  //   body: (payload: any) => JSON.stringify(payload),
  //   options: {
  //     headers: {
  //       'Content-Type': 'text/plain',  // ändern zu: application/json oder text/plain
  //       responseType: 'text',
  //     },
  //   },
  // };

  // post = {
  //   endPoint: 'https://portfolio-bilal.com/sendMail.php',
  //   body: (payload: any) => JSON.stringify(payload),
  //   options: {
  //     headers: {
  //       'Content-Type': 'application/json', // Korrekt für JSON-Daten
  //     },
  //   },
  // };

  post = {
    endPoint: 'https://portfolio-bilal.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json', // Ensure this matches the server's expected content type
      },
      responseType: 'text' as const, // Explicitly set responseType to 'text'
    },
  };

  onSubmit(ngForm: NgForm) {
    console.log('Form submitted:', ngForm.submitted);
    console.log('Form valid:', ngForm.form.valid);
    console.log('Mail test:', this.mailTest);
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            console.log('HTTP Response:', response);
            ngForm.resetForm();
          },
          error: (error) => {
            // console.error(error);
            console.error('HTTP Error:', error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
    console.log(this.contactData);
  }

//   onSubmit(ngForm: NgForm) {
//   if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
//     this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
//       .subscribe({
//         next: (response) => {
//           try {
//             const parsedResponse = JSON.parse(response); // Parse if it's JSON
//             console.log('Response:', parsedResponse);
//           } catch (e) {
//             console.warn('Non-JSON response:', response); // Handle non-JSON response
//           }
//           ngForm.resetForm();
//         },
//         error: (error) => {
//           console.error('Error:', error);
//         },
//         complete: () => console.info('Send post complete'),
//       });
//   } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
//     ngForm.resetForm();
//   }
//   console.log(this.contactData);
// }

}
