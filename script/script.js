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
mainContainer.addEventListener('click',function(event){
    const btn= event.target.closest('.delete')
    if(btn){
       const parentNode=event.target.closest('.card');
       const companyName = parentNode.querySelector('.companyName').innerText
       interviewList = interviewList.filter(item => item.companyName !== companyName);
        rejectedList = rejectedList.filter(item => item.companyName !== companyName);
       parentNode.remove();
       calTotalCount()
       renderIntrview()
       renderRejected()
       noJobAvailable()
    }

    if(event.target.classList.contains('interview-btn')){
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector('.companyName').innerText
    const jobTittle = parentNode.querySelector('.jobTittle').innerText
    const salary = parentNode.querySelector('.salary').innerText
    const statusBtn = parentNode.querySelector('.status-btn').innerText
    const jobDetails = parentNode.querySelector('.jobDetails').innerText
    parentNode.querySelector('.status-btn').innerText = 'Interview'
    const cardInfo = {
        companyName,
        jobTittle,
        salary,
        statusBtn:'Interview',
        jobDetails
    }
    
    const companyExist = interviewList.find(item=> item.companyName == cardInfo.companyName)
    
    if(!companyExist){
        interviewList.push(cardInfo)
    }
    rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName);
    if(currentState == 'rejected-filter-btn'){
        renderRejected()
    }
    calTotalCount()
    noJobAvailable()
    // renderIntrview()
    }
    else if(event.target.classList.contains('rejected-btn')){
        const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector('.companyName').innerText
    const jobTittle = parentNode.querySelector('.jobTittle').innerText
    const salary = parentNode.querySelector('.salary').innerText
    const statusBtn = parentNode.querySelector('.status-btn').innerText
    const jobDetails = parentNode.querySelector('.jobDetails').innerText
    parentNode.querySelector('.status-btn').innerText = 'Rejected'
    const cardInfo = {
        companyName,
        jobTittle,
        salary,
        statusBtn:'Rejected',
        jobDetails
    }
    
    const companyExist = rejectedList.find(item=> item.companyName == cardInfo.companyName)
    
    if(!companyExist){
        rejectedList.push(cardInfo)
    }
    interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName);
    if(currentState == 'interview-filter-btn'){
        renderIntrview()
    }
    calTotalCount()
    noJobAvailable()
    }
    
})