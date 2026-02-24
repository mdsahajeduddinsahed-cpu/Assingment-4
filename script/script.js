let interviewList= [];
let rejectedList= [];
let currentState= 'all'
let total = document.getElementById('total');
let interview = document.getElementById('interview');
let rejected = document.getElementById('rejected');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');
const noJobSection = document.getElementById('No-job-section')

const filterSection = document.getElementById('filtered-section')

const allCardSection = document.getElementById('allCards');

const mainContainer = document.querySelector('main');

function calTotalCount(){
    total.innerText = allCardSection.children.length
    interview.innerText = interviewList.length
    rejected.innerText = rejectedList.length
}
calTotalCount()

function toggleStyle(id){
    allFilterBtn.classList.remove('bg-[#3B82F6]','text-white')
    interviewFilterBtn.classList.remove('bg-[#3B82F6]','text-white')
    rejectedFilterBtn.classList.remove('bg-[#3B82F6]','text-white')
    allFilterBtn.classList.add('bg-white','text-black','border-gray-300', 'hover:bg-gray-100')
    interviewFilterBtn.classList.add('bg-white','text-black','border-gray-300', 'hover:bg-gray-100')
    rejectedFilterBtn.classList.add('bg-white','text-black','border-gray-300', 'hover:bg-gray-100')
    
    const selected = document.getElementById(id);
    currentState=id
    selected.classList.remove('bg-white','text-black','border-gray-300', 'hover:bg-gray-100')
    selected.classList.add('bg-[#3B82F6]','text-white')

    if(id == 'interview-filter-btn'){
        allCardSection.classList.add('hidden')
        filterSection.classList.remove('hidden')
        renderIntrview()
    }
    else if(id=='all-filter-btn'){
        filterSection.classList.add('hidden')
        allCardSection.classList.remove('hidden')

    }
    else if(id =='rejected-filter-btn'){
        allCardSection.classList.add('hidden')
        filterSection.classList.remove('hidden')
        renderRejected()
        
    }
    noJobAvailable()
    

}
function noJobAvailable(){
    if(currentState == 'interview-filter-btn'){
        if(interviewList.length===0){
            noJobSection.classList.remove('hidden')
        }
        else{
            
            noJobSection.classList.add('hidden')
        }
    }
    else if(currentState === 'rejected-filter-btn'){
        if(rejectedList.length===0){
            noJobSection.classList.remove('hidden')
        }
        else{
            noJobSection.classList.add('hidden')
        }
    }
    else{

        if(Number(total.innerText) === 0 ){
            noJobSection.classList.remove('hidden')
        }
        else{
            noJobSection.classList.add('hidden')
        }
    }
}
