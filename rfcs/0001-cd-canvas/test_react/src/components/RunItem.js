import React from 'react';
import semaphore from '../images/semaphore-logo-sign-black.svg';

const RunItem = React.memo(({ status, commitTitle, commitHash, imageVersion, extraTags, timestamp, date, needApproval, isHightlighted = false }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`run-item flex items-start mv1 pa2 bt ${isHightlighted ? (status.toLowerCase() === 'passed' ? 'bg-washed-green b--green' :  (status.toLowerCase() === 'failed' ? 'bg-washed-red b--red' : "bg-washed-blue b--indigo")) : 'bg-white'}`}>
      <button 
          className="btn btn-outline btn-small py-0 px-0 leading-none"
          onClick={toggleExpand}
          title={isExpanded ? "Hide details" : "Show details"}
        >
          <span className="material-symbols-outlined">{isExpanded ? 'arrow_drop_down' : 'arrow_right'}</span>
      </button>
      <div className='w-full'>
        <div className={`flex justify-between w-ful`}>
          <div className="flex items-center">
            {(() => {
              switch (status.toLowerCase()) {
                case 'passed':
                  return <span className="material-symbols-outlined fill green f1 mr1">check_circle</span>
                case 'failed':
                  return <span className="material-symbols-outlined fill red f1 mr1">cancel</span>
                case 'queued':
                  return <span className="material-symbols-outlined fill orange f1 mr1">queue</span>
                case 'running':
                  return <span className="br-pill bg-blue w-[22px] h-[22px] b--lightest-blue text-center mr2"><span className="white f4 mr1 job-log-working"></span></span>
                default:
                  return null
              }
            })()}
            <img src={semaphore} width={20} className="mx-1 hidden"/>
            <a href="#" className="truncate ml2 b hidden">{commitTitle}</a>
            <div className={`flex items-center pt1 ${isExpanded ? "hidden" : "flex"}`}>
              <span className="bg-black-05 text-gray-600 text-xs px-1 py-1 br2 mr2 pipeline-badge code">code: {commitHash}</span>
              <span className="bg-black-10 black text-xs px-1 py-1 br2 mr2 pipeline-badge ba b--black-20 code">image: {imageVersion}</span>
              {extraTags && (
                <span className="text-xs px-2 py-1 mr2">{extraTags}</span>
              )}
            </div>
          </div>
          <div className="flex items-center">
          <div className={`text-xs gray ml3-m ml0 mr3 tr ${isExpanded ? "hidden" : "inline-block"}`}>{timestamp}</div>
          {status.toLowerCase() === 'queued' && <button className="btn btn-secondary btn-small"><i className="material-symbols-outlined text-sm">close</i></button>}
          </div>

        </div>
        <div className="w-full">
        
        <div className="flex items-start">
          
         
          {isExpanded && (
            <div className="pt2">
                <div className="gray text-sm hidden">
                  <p><i className='material-symbols-outlined mr1 text-sm hidden'>schedule</i><strong>Started</strong> Jan 16, 2022 3:54:43 PM <strong> · Finished</strong> Jan 16, 2022 3:55:08 PM <strong> · Duration</strong> 25 seconds</p>
                  <p className='hidden'><i className='material-symbols-outlined mr1 text-sm'>calendar_month</i>2 days ago</p>
                </div>
                <div className="flex"><div className="flex items-start"><i className="hidden material-symbols-outlined mr1 text-sm">timer</i><div className="text-sm"><div className="mb1 ttu hidden">Execution details</div><div className="flex items-center"><div className="gray"><div>Started</div><div>Finished</div><div>Duration</div></div><div className="ml2"><div>Jan 16, 2022 10:23:45</div><div>Jan 16, 2022 10:23:45</div><div>25 seconds</div></div></div></div></div></div>
              <div className="flex justify-between mt-2">
                <div className='w-1/2'>
                  <div className="flex items-start"> 
                    <i className="material-symbols-outlined mr1 text-sm">input</i>
                    <div className="text-sm">
                    <div className='mb1 ttu'>Inputs</div>
                      <div className="flex items-center code text-xs">
                        <div className='gray'>
                          <div>Code</div>
                          <div className='b bg-black-05'>Image</div>
                          <div>Terraform</div>
                          <div>Something</div>
                        </div>
                        <div className=''>
                          <div className='pl2'>1045a77</div>
                          <div className='b bg-black-05 pl2'>{imageVersion}</div>
                          <div className='pl2'>32.32</div>
                          <div className='pl2'>adsfasdf</div>
                        </div>
                      </div>
                    </div>
                  </div>
                
                </div>
        
                <div className='w-1/2 bl br--black-075 pl3'>
                  <div className="flex items-start"> 
                    <i className="material-symbols-outlined mr1 text-sm">output</i>
                    <div className="text-sm">
                    <div className='mb1 ttu'>Outputs</div>
                      <div className="flex items-center code text-xs">
                        <div className='gray'>
                          <div>Code</div>
                          <div className='b bg-black-05'>Image</div>
                          <div>Terraform</div>
                          <div>Something</div>
                        </div>
                        <div className=''>
                          <div className='pl2'>1045a77</div>
                          <div className='b bg-black-05 pl2'>{imageVersion}</div>
                          <div className='pl2'>32.32</div>
                          <div className='pl2'>adsfasdf</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
              <div className='flex hidden'>
                <div className="flex items-start"> 
                    <i className="material-symbols-outlined mr1 text-sm">timer</i>
                    <div className="text-sm">
                    <div className='mb1 ttu'>Execution details</div>
                      <div className="flex items-center">
                        <div className='gray'>
                          <div>Date</div>
                          <div>Started</div>
                          <div>Finished</div>
                          <div>Duration</div>
                        </div>
                        <div className='ml2'>
                          <div>Jan 16, 2022</div>
                          <div>10:23:45</div>
                          <div>10:23:45</div>
                          <div>25 seconds</div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          )}
        </div>
        </div>
        </div>
        
        
       
        
       
      
      
      {/* Expand toggle */}

        
      
      

      {/* Expanded content */}
      
    </div>
  );
});

export default RunItem;
