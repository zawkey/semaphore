import React from 'react';
import semaphore from '../images/semaphore-logo-sign-black.svg';

const MessageItem = React.memo(({ commitHash, imageVersion, extraTags, timestamp, approved = false }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`run-item flex items-start mv1 pa2 bt bg-white`}>
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
          

          <span className="material-symbols-outlined fill orange f1 mr1">input</span>
          <a href="#" className={`truncate b ${isExpanded ? "flex" : "flex"}`}>Msg #2dlsf32fw</a>
          
          </div>
          <div className="flex items-center">
            
          <div className={`text-xs gray ml3-m ml0 mr3 tr ${isExpanded ? "hidden" : "inline-block"}`}>{timestamp}</div>
          <div className="button-group hidden">
            <button className={`btn btn-secondary btn-small ${approved ? 'bg-lightest-green b--washed-green dark-green ba pointer-events-none' : ''}`}><i className="material-symbols-outlined text-sm">check</i></button>
            <button className="btn btn-secondary btn-small"><i className="material-symbols-outlined text-sm">close</i></button>
          </div>
           <button className="btn btn-link btn-small hidden"><i className="material-symbols-outlined text-sm">more_horiz</i></button>
          </div>

        </div>
        <div className="w-full">
        <div className={`flex items-center pt1 ${isExpanded ? "hidden" : "flex"}`}>
            <span className="bg-black-05 text-gray-600 text-xs px-1 py-1 br2 mr2 pipeline-badge code">code: {commitHash}</span>
            <span className="bg-black-10 black text-xs px-1 py-1 br2 mr2 pipeline-badge ba b--black-20 code">image: {imageVersion}</span>
            {extraTags && (
              <span className="text-xs px-2 py-1 mr2">{extraTags}</span>
            )}
          </div>
        <div className="flex items-start">
          
          
          {isExpanded && (
            <div className="pt2">
                
                <div className="flex"><div className="flex items-start hidden"><i className="hidden material-symbols-outlined mr1 text-sm">timer</i><div className="text-sm"><div className="mb1 ttu hidden">Execution details</div><div className="flex items-center"><div className="gray"><div>Started</div><div>Finished</div><div>Duration</div></div><div className="ml2"><div>Jan 16, 2022 10:23:45</div><div>Jan 16, 2022 10:23:45</div><div>25 seconds</div></div></div></div></div></div>
              <div className="flex justify-between">
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
        <div className="flex items-center justify-between mt1 bt b--black-075 py-2">
            <div className='flex items-center text-xs'><span className="material-symbols-outlined gray f6 mr1">schedule</span> Run next Monday</div>
            <div className='flex items-center text-xs'>
              
              <span className="material-symbols-outlined f6 gray">check_circle</span>
              <div className="ml1">approved by <a href="#" className="black underline">1 person</a>, waiting for 2 more</div>
            </div>
            <div className="flex items-center">
                <div className="button-group">
                    <button className={`btn btn-secondary btn-small ${approved ? 'bg-lightest-green b--washed-green dark-green ba pointer-events-none' : ''}`}><i className="material-symbols-outlined text-sm">check</i></button>
                    <button className="btn btn-secondary btn-small"><i className="material-symbols-outlined text-sm">close</i></button>
                </div>
                <button className="btn btn-link btn-small"><i className="material-symbols-outlined text-lg px-0 py-0">more_vert</i></button>
            </div>
          </div>
        </div>
        
    
          
        
        
       
        
       
      
      
      {/* Expand toggle */}

        
      
      

      {/* Expanded content */}
      
    </div>
  );
});

export default MessageItem;
