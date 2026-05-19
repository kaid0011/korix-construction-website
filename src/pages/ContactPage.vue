<template>
  <q-page class="contact-page bg-white">
    <section class="page-header text-white flex flex-center text-center q-py-xl relative-position">
      <div class="header-overlay"></div>
      <div class="header-content animate-fade-down relative-position z-top q-py-xl q-px-md">
        <div class="text-accent text-weight-bolder text-uppercase q-mb-md tracking-wide">Get In Touch</div>
        <h1 class="text-h1 text-weight-bolder q-mb-none line-height-tight">Contact Us</h1>
        <div class="section-divider bg-accent q-mx-auto q-mt-lg"></div>
      </div>
    </section>

    <section class="contact-content q-px-md q-px-md-xl q-py-xl bg-info">
      <div class="row q-col-gutter-xl justify-center q-py-lg" style="max-width: 1400px; margin: 0 auto;">
        
        <div class="col-12 col-md-5 animate-fade-right">
          <div class="q-pr-md-lg">
            <div class="text-dark text-weight-bold text-uppercase q-mb-md tracking-wide">Contact Details</div>
            <h2 class="text-h2 text-dark text-weight-bolder q-mb-lg line-height-tight">We are here to help you build.</h2>
            <p class="text-body1 text-grey-8 q-mb-xl text-weight-medium">Reach out to us for consultations, project estimates, or any inquiries regarding your workspace transformation.</p>

            <div class="row q-col-gutter-md">
              <div class="col-12">
                <q-card flat class="contact-card q-pa-md bg-white shadow-3">
                  <q-item>
                    <q-item-section avatar>
                      <div class="icon-box bg-dark flex flex-center">
                        <q-icon name="location_on" color="accent" size="md" />
                      </div>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-weight-bolder text-dark text-h6">Office Address</q-item-label>
                      <q-item-label caption class="text-grey-7 text-body1 q-mt-xs">{{ contact.address }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-card>
              </div>

              <div class="col-12 col-sm-6">
                <q-card flat class="contact-card q-pa-md bg-white shadow-3 full-height">
                  <q-item>
                    <q-item-section avatar>
                      <div class="icon-box bg-dark flex flex-center">
                        <q-icon name="person" color="accent" size="md" />
                      </div>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-weight-bolder text-dark text-h6">{{ contact.name }}</q-item-label>
                      <q-item-label caption class="text-grey-7 text-body1 q-mt-xs">{{ contact.role }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-card>
              </div>

              <div class="col-12 col-sm-6">
                <q-card flat class="contact-card q-pa-md bg-white shadow-3 full-height">
                  <q-item>
                    <q-item-section avatar>
                      <div class="icon-box bg-dark flex flex-center">
                        <q-icon name="phone" color="accent" size="md" />
                      </div>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-weight-bolder text-dark text-h6">Phone</q-item-label>
                      <q-item-label caption class="text-grey-7 text-body1 q-mt-xs">{{ contact.phone }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-card>
              </div>

              <div class="col-12">
                <q-card flat class="contact-card q-pa-md bg-white shadow-3">
                  <q-item>
                    <q-item-section avatar>
                      <div class="icon-box bg-dark flex flex-center">
                        <q-icon name="email" color="accent" size="md" />
                      </div>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-weight-bolder text-dark text-h6">Email Address</q-item-label>
                      <q-item-label caption class="text-grey-7 text-body1 q-mt-xs">{{ contact.email }}</q-item-label>
                      <q-item-label caption class="text-grey-7 text-body1">{{ contact.email2 }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-card>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-7 animate-fade-left q-mt-xl q-mt-md-none">
          <q-card class="form-card full-height q-pa-lg q-pa-md-xl shadow-15 bg-white relative-position">
            <div class="form-accent-border bg-primary"></div>
            
            <div class="text-h3 text-weight-bolder text-dark q-mb-sm">Send us a Message</div>
            <p class="text-body1 text-grey-7 q-mb-xl">Fill out the form below and our team will get back to you shortly.</p>
            
            <q-form class="q-gutter-lg">
              <div class="row q-col-gutter-md">
                <div class="col-12 col-sm-6">
                  <q-input outlined v-model="formData.firstName" label="First Name" color="primary" class="modern-input" bg-color="white"/>
                </div>
                <div class="col-12 col-sm-6">
                  <q-input outlined v-model="formData.lastName" label="Last Name" color="primary" class="modern-input" bg-color="white"/>
                </div>
              </div>
              <div class="row q-col-gutter-md">
                <div class="col-12 col-sm-6">
                  <q-input outlined v-model="formData.email" label="Email Address" type="email" color="primary" class="modern-input" bg-color="white"/>
                </div>
                <div class="col-12 col-sm-6">
                  <q-input outlined v-model="formData.phone" label="Phone Number" type="tel" color="primary" class="modern-input" bg-color="white"/>
                </div>
              </div>
              
              <q-select outlined v-model="formData.service" :options="serviceOptions" label="Service of Interest" color="primary" class="modern-input" bg-color="white" emit-value map-options>
                <template v-slot:prepend>
                  <q-icon name="business_center" />
                </template>
              </q-select>
              
              <q-input outlined v-model="formData.message" label="Your Message / Project Details" type="textarea" color="primary" rows="6" class="modern-input" bg-color="white"/>
              
              <div class="q-pt-md">
                <q-btn label="Send Message" icon-right="send" color="accent" text-color="dark" unelevated size="lg" class="full-width btn-primary-custom shadow-6" />
              </div>
            </q-form>
          </q-card>
        </div>
      </div>
    </section>

    <section class="map-section animate-fade-up relative-position shadow-up-6">
      <div class="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.73188630244!2d121.0355939736455!3d14.727744573954105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b055c1d04d5b%3A0xc9ae1b1d5b6f063e!2s78%20Susano%20Rd%2C%20San%20Agustin%2C%20Novaliches%2C%20Quezon%20City%2C%201123%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1779193064282!5m2!1sen!2sph" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
          class="responsive-iframe"
        ></iframe>
      </div>
    </section>
  </q-page>
</template>

<style scoped>
.contact-page { overflow-x: hidden; }

/* Typography */
.tracking-wide { letter-spacing: 2px; }
.line-height-tight { line-height: 1.15; }
.section-divider { width: 50px; height: 3px; }

/* Hero Header */
.page-header {
  min-height: 380px;
  background: url('https://images.unsplash.com/photo-1504307651254-35680f356f58?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80') center/cover fixed;
}
.header-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(49, 69, 68, 0.98) 0%, rgba(83, 128, 84, 0.9) 100%); }

/* Contact Detail Cards */
.contact-card { 
  border-radius: 12px; 
  transition: transform 0.3s ease, box-shadow 0.3s ease; 
  border-top: 4px solid transparent; 
}
.icon-box {
  width: 50px;
  height: 50px;
  border-radius: 12px 0 12px 0;
}
.contact-card:hover { 
  transform: translateY(-5px); 
  box-shadow: 0 16px 32px rgba(49, 69, 68, 0.08); 
  border-top-color: var(--q-primary); 
}

/* Form Styling (Asymmetrical Border Radius) */
.form-card { 
  border-radius: 40px 0 40px 0; 
  overflow: hidden;
  border: 1px solid rgba(49, 69, 68, 0.05);
}
.form-accent-border {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 6px;
}
.modern-input :deep(.q-field__control) { 
  border-radius: 8px; 
  transition: box-shadow 0.3s ease, border-color 0.3s ease; 
  border: 1px solid rgba(0,0,0,0.05);
}
.modern-input :deep(.q-field__control:hover) { 
  box-shadow: 0 8px 16px rgba(83, 128, 84, 0.08); 
}

/* Buttons */
.btn-primary-custom { 
  border-radius: 8px; 
  font-weight: 800; 
  letter-spacing: 1px; 
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); 
}
.btn-primary-custom:hover { 
  background-color: #e6b85c !important; 
  transform: translateY(-3px); 
  box-shadow: 0 16px 32px rgba(239, 200, 111, 0.4) !important; 
}

/* Responsive Map Layout Structure */
.map-container {
  position: relative;
  width: 100%;
  height: 500px;
  background-color: var(--q-dark);
  overflow: hidden;
}
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Animations */
.animate-fade-down { animation: fadeInDown 1s cubic-bezier(0.25, 0.8, 0.25, 1) forwards; }
.animate-fade-right { animation: fadeInRight 1s cubic-bezier(0.25, 0.8, 0.25, 1) forwards; opacity: 0; }
.animate-fade-left { animation: fadeInLeft 1s cubic-bezier(0.25, 0.8, 0.25, 1) forwards; opacity: 0; }
.animate-fade-up { animation: fadeInUp 1s cubic-bezier(0.25, 0.8, 0.25, 1) forwards; opacity: 0; }

@keyframes fadeInDown { from { opacity: 0; transform: translateY(-40px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeInRight { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
@keyframes fadeInLeft { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }
</style>

<script setup>
import { ref } from 'vue';

const contact = {
  name: "Ms. June Ramirez",
  role: "Sales Manager",
  phone: "0924.2485491",
  email: "junekorix@gmail.com",
  email2: "saleskorix@gmail.com",
  address: "#78 Susano Rd, San Agustin, Novaliches, Quezon City, 1123"
};

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  service: null,
  message: ''
});

const serviceOptions = [
  'Office Fit-Out',
  'Office Renovation',
  'Commercial Construction',
  'Interior Design & Space Planning',
  'Custom Office Furniture',
  'Electrical & Mechanical Works',
  'Other / General Inquiry'
];
</script>