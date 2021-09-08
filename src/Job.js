class Job {

    static all = []
  
    constructor({id, title, company, notes, appDate, link, statusName, statusId}) {
        this.id = id;
        this.title = title;
        this.company = company;
        this.notes = notes;
        this.appDate = appDate;
        this.link = link
        this.statusName = statusName
        this.statusId = statusId
        this.constructor.all.push(this)
       //console.log(this)
    }

    renderOptions = () => { 
      // const main = document.getElementById("main")
      // main.innerHTML = ''
      const statusDivs =  document.getElementsByClassName("status-card")
     // const jobDiv = document.createElement('div')
      Array.from(statusDivs).forEach(element => {
        element.addEventListener('click', Job.handleCardClick)
        //  event => {    
        //   console.log(event.target)
        // })
      })
      this.renderJobs()  
    }

    renderJobs = () => {
      console.log(this)
        const {title, company, notes, appDate, link, statusName, id, StatusId} = this
        let n = this.statusId
        document.getElementById(n).innerHTML += `
        <div class="job-card" data-id=${n}>
        <p class="title">${title}</p>
        <p clss="company">${company}</p>
        <p clss="date">${appDate}</p>
        </div>`
     
    }
  

    static handleCardClick = (e) => {
      if (e.target.classList.contains("title")) {
        const id = e.target.closest(".job-card").dataset.id
        this.find(id).showDetails()
      }
     
    }

    static find = (id) => this.all.find(job => job.id == id)


    showDetails = () => {
      const {title, company, notes, appDate, link, statusName, id, StatusId} = this
      document.getElementById("main").innerHTML = `
      <div class ="details-container">
      <h2>${title}</h2>
      <h3>${company}</h3>
      <p class="notes">${notes}</p>
      <p class="date">${appDate}</p>
      <a href="${link}">More application details</a>
      </div>
      <p><button id="edit"> Edit my details </button></p>
      <p><button id="back"> Back </button></p>`
      document.getElementById("back").addEventListener('click', this.handleShowClick)
    }

    handleShowClick = (e) => {
      console.log(e.target.id)

    }

    // static getJobs() {
    //     api.getJobs().then(jobs => {
    //         jobs.forEach(job => new Job(job))
    //         //get all jobs, interating through them from the api, initializing each job
    //         // then storing them in all array b/c constructor and calling render
    //       // this.renderContainer()
    //     })
    // }
}