<template>
  <q-page class="about-page bg-white">
    <section class="page-header bg-dark text-white flex flex-center text-center q-py-xl relative-position">
      <div class="header-overlay"></div>
      <div class="header-content animate-fade-down relative-position z-top q-py-xl q-px-md">
        <div class="text-accent text-weight-bolder text-uppercase q-mb-md tracking-wide">Our Heritage</div>
        <h1 class="text-h1 text-weight-bolder q-mb-none line-height-tight responsive-h1">About Korix Construction</h1>
        <div class="section-divider bg-accent q-mx-auto q-mt-lg"></div>
      </div>
    </section>

    <section class="main-story q-px-md q-px-md-xl q-col-gutter-x-xl q-py-xl row items-center justify-center bg-white">
      <div class="col-12 col-md-5 q-pr-md-xl animate-fade-right q-mb-xl q-mb-md-none">
        <div class="image-wrapper relative-position q-mx-auto" style="max-width: 500px;">
          <div class="single-shape shape-story bg-accent"></div>
          
          <q-img 
            src="../assets/images/23.jpg"
            class="story-img top-left-img shadow-10" 
            style="height: 520px;" 
            fit="cover" 
          />
        </div>
      </div>

      <div class="col-12 col-md-7 q-pl-md-xl animate-fade-left text-center text-md-left">
        <div class="text-dark text-weight-bold text-uppercase q-mb-sm tracking-wide">Company Overview</div>
        <h2 class="text-h2 text-dark text-weight-bolder q-mb-lg line-height-tight responsive-h2">
          Transforming spaces into <br><span class="text-primary">inspiring environments.</span>
        </h2>
        
        <div class="text-body1 text-grey-9 line-height-relaxed text-content">
          <p v-for="(paragraph, index) in paragraphs" :key="index" class="q-mb-md text-weight-medium">
            {{ paragraph }}
          </p>
        </div>
      </div>
    </section>

    <section class="synergy-section bg-dark text-white q-py-xl q-px-md q-px-md-xl relative-position">
      <div class="row items-center q-py-xl q-px-sm q-px-md-xl q-col-gutter-x-xl q-mx-auto" style="max-width: 1440px;">
        <div class="col-12 col-md q-pr-md-xl text-center text-md-left q-mb-xl q-mb-md-none">
          <div class="text-accent text-weight-bold text-uppercase q-mb-sm tracking-wide">Corporate Strength</div>
          <h2 class="text-h2 text-white text-weight-bolder q-mb-lg line-height-tight responsive-h2">Backed by a legacy of excellence.</h2>
          <p class="text-body1 text-grey-4 q-mb-xl text-weight-regular line-height-relaxed q-mx-auto q-mx-md-none" style="max-width: 90%;">
            Operating in tandem with our sister company, <strong>Korix Furniture</strong>, we leverage expanded resources, deep industry expertise, and a wider network of material sourcing to handle projects of any scale and complexity with uncompromising standards.
          </p>

          <div class="row q-col-gutter-lg justify-center justify-md-start">
            <div v-for="stat in companyStats" :key="stat.label" class="col-6 col-sm-4">
              <div class="text-h3 text-accent text-weight-bolder q-mb-xs responsive-h3">{{ stat.value }}</div>
              <div class="text-subtitle2 text-grey-5 text-weight-bold text-uppercase">{{ stat.label }}</div>
            </div>
          </div>
        </div>
        
        <div class="col-12 col-md-auto flex justify-center justify-md-end">
          <div class="profile-card-wrapper relative-position full-width flex justify-center justify-md-end" style="max-width: 480px;">
            <div class="single-shape shape-profile bg-accent"></div>
            
            <q-card flat class="profile-card bg-white q-pa-lg q-pa-md-xl shadow-2 text-left">
              <div class="text-h4 text-dark text-weight-bolder q-mb-lg responsive-h4">Group Expertise</div>
              <q-list dense>
                <q-item v-for="highlight in profileHighlights" :key="highlight" class="q-px-none q-py-sm text-dark">
                  <q-item-section avatar style="min-width: 32px; padding-right: 8px;">
                    <q-icon name="fas fa-check-circle" color="primary" size="sm" />
                  </q-item-section>
                  <q-item-section class="text-weight-bold text-body1">{{ highlight }}</q-item-section>
                </q-item>
              </q-list>
              <q-btn to="/services" color="dark" text-color="white" label="View Full Capabilities" unelevated class="btn-dark-custom full-width q-mt-xl" />
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <section class="team-section q-px-md q-px-md-xl q-py-xl bg-grey-1">
      <div class="q-mx-auto q-py-xl" style="max-width: 1440px;">
        <div class="text-center q-mb-xl">
          <div class="section-divider bg-accent q-mx-auto q-mb-md"></div>
          <div class="text-dark text-weight-bold text-uppercase q-mb-sm tracking-wide">The People Behind The Work</div>
          <h2 class="text-h2 text-dark text-weight-bolder q-mb-sm line-height-tight responsive-h2">Meet Our Team</h2>
          <p class="text-h6 text-grey-7 text-weight-regular responsive-subtitle">Dedicated professionals committed to delivering excellence on every project.</p>
        </div>

        <div class="text-dark text-weight-bold text-uppercase q-mb-lg tracking-wide text-center">Leadership</div>
        <div class="row q-col-gutter-xl justify-center q-mb-xl">
          <div
            v-for="(member, index) in leadershipTeam"
            :key="member.name"
            class="col-12 col-sm-6 col-md-4 card-stagger"
            :style="{ animationDelay: `${index * 0.15}s` }"
          >
            <q-card flat class="team-card full-height q-pa-lg text-center bg-white shadow-2">
              <div class="team-avatar-wrapper bg-dark flex flex-center q-mx-auto q-mb-lg">
                <q-icon :name="member.icon" size="xl" color="accent" />
              </div>
              <div class="text-h6 text-dark text-weight-bolder q-mb-xs">{{ member.name }}</div>
              <div class="text-caption text-primary text-weight-bold text-uppercase tracking-wide">{{ member.role }}</div>
            </q-card>
          </div>
        </div>

        <div class="text-dark text-weight-bold text-uppercase q-mb-lg tracking-wide text-center">Sales Team</div>
        <div class="row q-col-gutter-xl justify-center">
          <div
            v-for="(member, index) in salesTeam"
            :key="member.name"
            class="col-12 col-sm-6 col-md-4 card-stagger"
            :style="{ animationDelay: `${index * 0.15}s` }"
          >
            <q-card flat class="team-card full-height q-pa-lg text-center bg-white shadow-2">
              <div class="team-avatar-wrapper bg-primary flex flex-center q-mx-auto q-mb-lg">
                <q-icon :name="member.icon" size="xl" color="white" />
              </div>
              <div class="text-h6 text-dark text-weight-bolder q-mb-xs">{{ member.name }}</div>
              <div class="text-caption text-primary text-weight-bold text-uppercase tracking-wide">{{ member.role }}</div>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <section class="core-values-section q-px-md q-px-md-xl q-py-xl bg-info">
      <div class="q-mx-auto q-py-xl" style="max-width: 1440px;">
        <div class="text-center q-mb-xl">
          <div class="section-divider bg-accent q-mx-auto q-mb-md"></div>
          <div class="text-dark text-weight-bold text-uppercase q-mb-sm tracking-wide">Our Principles</div>
          <h2 class="text-h2 text-dark text-weight-bolder q-mb-sm line-height-tight responsive-h2">Core Values</h2>
          <p class="text-h6 text-grey-7 text-weight-regular responsive-subtitle">The foundational pillars that guide every project we undertake.</p>
        </div>

        <div class="row q-col-gutter-xl justify-center">
          <div 
            v-for="(cv, index) in coreValues" 
            :key="cv.title" 
            class="col-12 col-sm-6 col-md-3 card-stagger" 
            :style="{ animationDelay: `${index * 0.15}s` }"
          >
            <q-card flat class="core-value-card full-height q-pa-lg q-pa-md-xl bg-white shadow-2">
              <div class="watermark text-grey-2 text-weight-bolder">{{ '0' + (index + 1) }}</div>
              
              <div class="cv-icon-wrapper bg-info flex flex-center q-mb-lg shadow-1">
                <q-icon :name="cv.icon" size="xl" color="primary" class="cv-icon" />
              </div>
              <h3 class="text-h5 text-dark text-weight-bolder q-mb-md relative-position z-top responsive-h5">{{ cv.title }}</h3>
              <p class="text-body1 text-grey-8 text-weight-medium line-height-relaxed relative-position z-top">{{ cv.desc }}</p>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <section class="strategic-section q-px-md q-px-md-xl q-py-xl bg-grey-1">
    <div class="q-mx-auto q-py-xl" style="max-width: 1440px;">
      
      <div class="row q-col-gutter-lg justify-center">
        <div class="col-12 col-md-4 card-stagger" style="animation-delay: 0.2s;">
          <q-card flat class="strategic-card full-height q-pa-lg q-pa-md-xl text-center ">
            <div class="icon-wrapper q-mx-auto q-mb-lg flex flex-center">
              <q-icon name="fas fa-flag" size="md" color="white" />
            </div>
            <div class="text-h5 text-dark text-weight-bolder q-mb-md responsive-h5">Our Mission</div>
            <p class="text-body1 text-grey-8 line-height-relaxed">{{ mission }}</p>
          </q-card>
        </div>

        <div class="col-12 col-md-4 card-stagger" style="animation-delay: 0.3s;">
          <q-card flat class="strategic-card full-height q-pa-lg q-pa-md-xl text-center">
            <div class="icon-wrapper q-mx-auto q-mb-lg flex flex-center">
              <q-icon name="fas fa-eye" size="md" color="white" />
            </div>
            <div class="text-h5 text-dark text-weight-bolder q-mb-md responsive-h5">Our Vision</div>
            <p class="text-body1 text-grey-8 line-height-relaxed">{{ vision }}</p>
          </q-card>
        </div>

        <div class="col-12 col-md-4 card-stagger" style="animation-delay: 0.4s;">
          <q-card flat class="strategic-card full-height q-pa-lg q-pa-md-xl text-center">
            <div class="icon-wrapper q-mx-auto q-mb-lg flex flex-center">
              <q-icon name="fas fa-bullseye" size="md" color="white" />
            </div>
            <div class="text-h5 text-dark text-weight-bolder q-mb-md responsive-h5">Our Goal</div>
            <p class="text-body1 text-grey-8 line-height-relaxed">{{ goal }}</p>
          </q-card>
        </div>
      </div>
    </div>
  </section>
  </q-page>
</template>

<style scoped>
.about-page { overflow-x: hidden; }

/* Typography */
.tracking-wide { letter-spacing: 2px; }
.line-height-tight { line-height: 1.15; }
.line-height-relaxed { line-height: 1.7; }
.section-divider { width: 50px; height: 3px; }

/* Hero Header */
.page-header {
  min-height: 380px;
}
.header-overlay { position: absolute; inset: 0; background: rgba(5, 78, 39, 0.88); }

/* Main Story & Image Framework */
.image-wrapper { z-index: 1; }
.text-content p { font-size: 1.1rem; }
.story-img { width: 100%; transition: transform 0.3s ease; }
.image-wrapper:hover .story-img { transform: translateY(-6px); }

/* Synergy Profile Section */
.synergy-section { border-top: 8px solid var(--q-dark); }
.profile-card-wrapper { z-index: 1; }
.profile-card {
  width: 100%;
  border-radius: 0 40px 0 40px;
}

/* UNIFIED 1-TO-1 BACKGROUND GEOMETRIC SHAPES */
.single-shape {
  position: absolute;
  z-index: -1;
}
.shape-story {
  top: -12px;
  left: -12px;
  width: 100%;
  height: 100%;
  border-radius: 40px 0 0 0;
}
.shape-profile {
  bottom: -12px;
  right: -12px;
  width: 100%;
  height: 100%;
  border-radius: 0 40px 0 40px;
}

/* Base Image Radiuses */
.top-left-img { border-radius: 40px 0 0 0; }

/* --- UPGRADED CORE VALUES UI --- */
.core-values-section { border-top: 2px dashed rgba(49, 69, 68, 0.1); }
.core-value-card {
  position: relative;
  overflow: hidden;
  border-radius: 24px 0 24px 0;
  border: 1px solid rgba(49, 69, 68, 0.08);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  z-index: 1;
}

/* Watermark Number Styling */
.watermark {
  position: absolute;
  bottom: -20px;
  right: -5px;
  font-size: 140px;
  line-height: 1;
  z-index: 0;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  pointer-events: none;
}

/* Animated Bottom Border */
.core-value-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 6px;
  background-color: var(--q-primary);
  transition: width 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  z-index: 2;
}

.cv-icon-wrapper {
  width: 70px;
  height: 70px;
  border-radius: 16px 0 16px 0;
  transition: all 0.4s ease;
  position: relative;
  z-index: 2;
}
.cv-icon { transition: all 0.3s ease; }

/* Core Value Hover Interactions */
.core-value-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 48px rgba(49, 69, 68, 0.08) !important;
  border-color: transparent;
}
.core-value-card:hover::after {
  width: 100%; 
}
.core-value-card:hover .watermark {
  color: rgba(49, 69, 68, 0.06); 
  transform: translateY(-10px) scale(1.05);
}
.core-value-card:hover .cv-icon-wrapper {
  background-color: var(--q-primary) !important;
  border-radius: 0 16px 0 16px;
}
.core-value-card:hover .cv-icon {
  color: white !important;
  transform: scale(1.1) rotate(-8deg); 
}

/* Team Section */
.team-card {
  border-radius: 24px 0 24px 0;
  border: 1px solid rgba(49, 69, 68, 0.08);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.team-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 48px rgba(49, 69, 68, 0.1) !important;
  border-color: var(--q-primary);
}
.team-avatar-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 20px 0 20px 0;
  transition: border-radius 0.4s ease;
}
.team-card:hover .team-avatar-wrapper {
  border-radius: 0 20px 0 20px;
}

/* Mission/Vision Cards */
.modern-card { 
  border: none; 
  border-radius: 24px 0 24px 0; 
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s ease; 
}
.modern-card:hover { 
  transform: translateY(-10px); 
  box-shadow: 0 24px 48px rgba(49, 69, 68, 0.12) !important; 
}

/* Buttons styling */
.btn-dark-custom { 
  border-radius: 4px; 
  padding: 12px 24px; 
  font-weight: bold; 
  border: 1px solid var(--q-dark); 
  transition: all 0.3s; 
}
.btn-dark-custom:hover { 
  transform: translateY(-3px); 
  background-color: var(--q-primary) !important; 
  border-color: var(--q-primary); 
  color: white !important;
}

/* --- STRATEGIC INTENT SECTION --- */
.strategic-card {
  border-radius: 30px 0 30px 0;
  border: 1px solid rgba(49, 69, 68, 0.2);
  transition: all 0.4s ease;
  background: white;
  position: relative;
  overflow: hidden;
}

.strategic-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.05) !important;
  border-color: var(--q-primary);
}

.strategic-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--q-primary);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.strategic-card:hover::before { transform: scaleX(1); }

.icon-wrapper {
  width: 60px;
  height: 60px;
  background: var(--q-dark);
  border-radius: 15px 0 15px 0;
  transition: all 0.3s ease;
}

.strategic-card:hover .icon-wrapper {
  background: var(--q-primary);
  transform: rotate(5deg);
}

/* Animations */
.animate-fade-down { animation: fadeInDown 1s cubic-bezier(0.25, 0.8, 0.25, 1) forwards; }
.animate-fade-right { animation: fadeInRight 1s cubic-bezier(0.25, 0.8, 0.25, 1) forwards; opacity: 0; }
.animate-fade-left { animation: fadeInLeft 1s cubic-bezier(0.25, 0.8, 0.25, 1) forwards; opacity: 0; }
.card-stagger { animation: fadeInUp 1s cubic-bezier(0.25, 0.8, 0.25, 1) forwards; opacity: 0; transform: translateY(40px); }

@keyframes fadeInDown { from { opacity: 0; transform: translateY(-40px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeInRight { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
@keyframes fadeInLeft { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
@keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }

/* --- RESPONSIVE MEDIA QUERIES --- */

/* Tablets & Small Laptops */
@media (max-width: 1024px) {
  .single-shape { display: none; } 
  .story-img { height: 380px !important; }
}

/* Mobile Screens */
@media (max-width: 599px) {
  /* Dynamic Responsive Typography */
  .responsive-h1 { font-size: 2.5rem !important; line-height: 1.15 !important; }
  .responsive-h2 { font-size: 2rem !important; line-height: 1.25 !important; }
  .responsive-h3 { font-size: 1.75rem !important; line-height: 1.3 !important; }
  .responsive-h4 { font-size: 1.5rem !important; line-height: 1.3 !important; }
  .responsive-h5 { font-size: 1.25rem !important; line-height: 1.4 !important; }
  .responsive-subtitle { font-size: 1.1rem !important; }

  /* Element Scaling and Border Adjustments */
  .story-img { height: 300px !important; }
  .top-left-img { border-radius: 24px 0 24px 0; }
  .profile-card { border-radius: 0 24px 0 24px; }
  .core-value-card { border-radius: 16px 0 16px 0; }
  .modern-card { border-radius: 16px 0 16px 0; }
  .strategic-card { border-radius: 20px 0 20px 0; }
  
  /* Prevent huge elements from causing overflow or overlapping text on mobile */
  .watermark { font-size: 80px; bottom: -10px; right: 5px; }
}
</style>
<script setup>
const paragraphs = [
"Korix Construction specializes in high-quality workplace renovations, interior fit-outs, and custom furniture solutions. In partnership with our sister company, Korix Furniture, we provide end-to-end turnkey services—from initial planning and design to final installation—tailored to your business needs.",
"Combining industry expertise with a commitment to precision, we transform ordinary spaces into functional, inspiring environments that enhance productivity and reflect your brand identity. We deliver projects on time and within budget, building workspaces designed for long-term value and growth."  
];
// Add this to your constants
const goal = "To consistently deliver high-performance workspaces that balance aesthetic appeal with operational efficiency, ensuring every client project contributes to long-term business success.";
const mission = "To provide complete construction, office fit renovation, and furniture solutions that combine quality workmanship, innovative design, and dependable service to create productive and modern business spaces.";

const vision = "To be trusted industry leader in transforming workspaces through innovative construction solutions, modern interiors, and outstanding customer experience.";

const companyStats = [
  { label: "Combined Projects", value: "350+" },
  { label: "Years Experience", value: "15+" },
  { label: "Client Retention", value: "98%" }
];

const profileHighlights = [
  "End-to-end commercial design and build capability",
  "Extensive nationwide material sourcing network",
  "In-house specialized engineering and fabrication",
  "Rigorous corporate safety & compliance standards",
  "Dedicated long-term facility maintenance teams"
];

const leadershipTeam = [
  { name: 'Mr. Rico Lattao', role: 'President / General Manager', icon: 'business_center' },
  { name: 'Mrs. Mylene Lattao', role: 'Finance Manager', icon: 'account_balance' },
  { name: 'Engr. Benjamin J. Acuña', role: 'Civil Engineer', icon: 'engineering' }
];

const salesTeam = [
  { name: 'Ms. June Ramirez', role: 'Sales Manager', icon: 'leaderboard' },
  { name: 'Carl Casipit', role: 'Senior Construction', icon: 'construction' },
  { name: 'Vincent Rafael Delos Santos', role: 'Technical Sales Representative', icon: 'support_agent' }
];

const coreValues = [
  { 
    icon: 'verified', 
    title: 'Quality Excellence', 
    desc: 'We deliver uncompromising craftsmanship and premium materials in every detail of our builds.' 
  },
  { 
    icon: 'handshake', 
    title: 'Integrity & Trust', 
    desc: 'Transparency, honesty, and ethical practices form the foundation of all our client relationships.' 
  },
  { 
    icon: 'health_and_safety', 
    title: 'Safety First', 
    desc: 'We strictly adhere to industry safety protocols to ensure a secure environment for our teams and clients.' 
  },
  { 
    icon: 'lightbulb', 
    title: 'Innovative Solutions', 
    desc: 'We embrace modern construction techniques and smart space planning to maximize your efficiency.' 
  }
];
</script>