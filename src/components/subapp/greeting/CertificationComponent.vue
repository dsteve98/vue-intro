<template>
  <page-section-wrapper sectionTitle="Licenses and Certifications" class="cert-bg">
    <div class="grt-sct-certificate grt-sct-certificate-transition section-content d-flex align-items-center pt-5">
      <div class="container-fluid">
        <div class="row">
          <div v-for="(item,index) in certificates" :key="'cert'+index" class="col-12 col-md-6 pb-3">
            <div class="cert-item-box p-3 mb-2 h-100 rounded-2">
              <div>
                <h4>{{ item.name }}</h4>
              </div>
              <div>
                <h5><span>Issued <span class="fw-medium">{{ item.issued }}</span> | </span><a :href="item.credential" target="_blank">Credential</a></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </page-section-wrapper>
</template>

<script>
export default {
  data(){
    return {
      certificates: [
        {
          name: "IBM Data Analyst",
          issued: "Jan 2021",
          credential: "https://coursera.org/share/d0bdee6491635e614485a0b9e9987b21",
        },
        {
          name: "Data Science Fundamentals with Python and SQL",
          issued: "Dec 2020",
          credential: "https://coursera.org/share/a2c8279956e221def3b2afeee6ae9e8a",
        },
        {
          name: "IBM Data Science",
          issued: "Dec 2020",
          credential: "https://coursera.org/share/e1d560c348e7161aa9adea4956124d06",
        },
        {
          name: "Applied Data Science",
          issued: "Nov 2020",
          credential: "https://coursera.org/share/ed92eef403135c36b33df7ae44c41984",
        },
      ]
    }
  },
  props: {
  },
  methods: {
  },
  mounted: function(){
    const square = document.querySelector('.grt-sct-certificate');
    square.classList.remove('grt-sct-certificate-transition');
    const observer = new IntersectionObserver(entries => {
      // Loop over the entries
      entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add('grt-sct-certificate-transition');
        }
      });
    });

    observer.observe(document.querySelector('.grt-sct-certificate'));
  }
}
</script>

<style scoped>
.section-content {
  min-height: calc(100vh - 11rem);
}
.cert-item-box {
  border: 1px solid;
}
</style>
