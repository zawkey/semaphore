import React from 'react';
import semaphore from '../images/semaphore-logo-sign-black.svg';

const RunItem = React.memo(({ status, commitTitle, commitHash, imageVersion, extraTags, timestamp, date, needApproval }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
        <div className={`pa2 bg-washed-green bt ${status.toLowerCase() === 'passed' ? 'bg-washed-green b--green' : status.toLowerCase() === 'failed' ? 'bg-washed-red b--red' : status.toLowerCase() === 'running' ? 'bg-washed-blue b--blue' : status.toLowerCase() === 'queued' ? 'bg-washed-yellow b--yellow' : 'bg-washed-green b--green'} w-full bt min-w-0 text-ellipsis overflow-hidden`}>
            <div className="flex items-center justify-between">
                <div className="flex items-start min-w-0">
                    {(() => {
                        switch (status.toLowerCase()) {
                        case 'passed':
                            return <span className="material-symbols-outlined fill green f2 mr2">check_circle</span>
                        case 'failed':
                            return <span className="material-symbols-outlined fill red f2 mr2">cancel</span>
                        case 'queued':
                            return <span className="material-symbols-outlined fill orange f2 mr2">queue</span>
                        case 'running':
                            return <span className="br-pill bg-blue w-[22px] h-[22px] b--lightest-blue text-center mr2"><span className="white f4 mr1 job-log-working"></span></span>
                        default:
                            return null
                        }
                    })()}
                    <div>
                        <div className="flex items-center">
                        <a href="workflow.html" className="w-full b db link dark-gray underline-hover truncate">
                            Merge PR #3121:
                            Release deployment targets to all customers</a>
                            <div className="ml2 ml3-m ml0-l mr3-l tr-l f6 w-1/4 text-right">3 hours ago</div>
                    
                        </div>

                        <div className="flex items-center mb1 text-sm">
                            From

                            <a href="#" className="ml1 link dark-gray underline">master</a>
                            <span className="mh1">·</span>

                            <a href="#" className="link dark-gray underline">Deploy to Production</a>
                            <span className="mh1">·</span>

                            <div className="flex items-center">
                                <span className="material-symbols-outlined md-18">check_circle</span>
                                <div className="ml1">with 2 approvals</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between w-full">
                            <div>
                                <span className='b code text-xs bg-black-05 ph2 ba b--black-075 br1'>
                                    Image: 
                                    <span className="ml1 link dark-gray">{imageVersion}</span>
                                </span>
                                <span className='code text-xs bg-black-05 ph2 ba b--black-075 br1 ml2'>
                                    Code: 
                                    <span className="ml1 link dark-gray">{commitHash}</span>
                                </span>
                                <span className='code text-xs bg-black-05 ph2 ba b--black-075 br1 ml2'>
                                    Terraform: 
                                    <span className="ml1 link dark-gray">{commitHash}</span>
                                </span>
                            </div>
                            <button 
                            className="btn btn-outline btn-small flex items-center px-0"
                            onClick={toggleExpand}
                            title={isExpanded ? "Hide details" : "Show details"}
                            >
                                
                            {isExpanded ? 'Hide details' : 'View details'}
                            <span className="material-symbols-outlined">{isExpanded ? 'expand_less' : 'expand_more'}</span>
                            </button>
                        </div>

                    </div>
                </div>

                
                
                
            </div>
        </div>
    <div className={`hidden run-item flex-m pa2 ${status.toLowerCase() === 'passed' ? 'bg-washed-green b--green' : status.toLowerCase() === 'failed' ? 'bg-washed-red b--red' : status.toLowerCase() === 'running' ? 'bg-washed-blue b--blue' : status.toLowerCase() === 'queued' ? 'bg-washed-yellow b--yellow' : 'bg-washed-green b--green'} w-full bt min-w-0 text-ellipsis overflow-hidden`}>
      <div className="flex justify-between w-ful pt1 pb2">
        <div className="flex items-center">
          {(() => {
            switch (status.toLowerCase()) {
              case 'passed':
                return <span className="material-symbols-outlined fill green f1 mr2">check_circle</span>
              case 'failed':
                return <span className="material-symbols-outlined fill red f1 mr2">error</span>
              case 'queued':
                return <span className="material-symbols-outlined fill orange f1 mr2">queue</span>
              case 'running':
                return <span className="br-pill bg-blue w-[22px] h-[22px] b--lightest-blue text-center mr2"><span className="white f4 mr1 job-log-working"></span></span>
              default:
                return null
            }
          })()}
           <img src={semaphore} width={20} className="mx-1"/>
           <a href="#" className="truncate ml2">{commitTitle}</a>
           </div>
           <div className="flex items-center">
           <div className="f5 gray ml2 ml3-m ml0 mr3 tr">{timestamp}</div>
           {status.toLowerCase() === 'queued' && <button className="btn btn-secondary btn-small"><i className="material-symbols-outlined text-sm">close</i></button>}
           </div>
      </div>
      {needApproval && (
          <div className="flex items-center justify-between mt1 bt b--black-075 py-2">
            <div className='flex items-center text-xs'>
              <span className="material-symbols-outlined f6">check_circle</span>
              <div className="ml1">approved by <a href="#" className="black underline">1 person</a>, waiting for 2 more</div>
            </div>
            <div className="flex items-center">
                <button className="btn btn-primary btn-small mr2">✓ Approve</button>
            </div>
          </div>
        )}
      <div className="flex items-center w-full bt b--black-075 pt2">
        {/* Status icon */}
        
        {/* Commit info and badges */}
        <div className="w-full">
       
        
          <div className="flex">
            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mr2 pipeline-badge">code: {commitHash}</span>
            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mr2 pipeline-badge ba b--black-50 bw1">image: {imageVersion}</span>
            {extraTags && (
              <span className="text-xs px-2 py-1 rounded-full mr2 pipeline-badge cursor-pointer bg-gray-100 text-gray-700 hover:bg-gray-200 transition">{extraTags}</span>
            )}
          </div>
        </div>
        {/* Timestamp */}
        <div className="w-2/4 flex items-center justify-end hidden">
          <div className="">
            
            <div className="f5 gray ml2 ml3-m ml0 mr3 tr">{date}</div>
          </div>
        </div>
        <button 
          className="btn btn-outline btn-small"
          onClick={toggleExpand}
          title={isExpanded ? "Hide details" : "Show details"}
        >
          <span className="material-symbols-outlined">{isExpanded ? 'expand_less' : 'expand_more'}</span>
        </button>
      </div>
      
      {/* Expand toggle */}

        
      
      

      {/* Expanded content */}
      {isExpanded && (
        <div className="pa3 mt2">
            <div className="gray text-sm    ">
            <p><i className='material-symbols-outlined mr1 text-sm'>schedule</i><strong>Started:</strong> 3:54:43 PM <strong>Finished:</strong> 3:55:08 PM <strong>Duration:</strong> 25 seconds</p>
            <p><i className='material-symbols-outlined mr1 text-sm'>calendar_month</i>2 days ago</p>  `
            </div>
          <div className="flex justify-between">
            <div className='w-1/2'>
            <div className="flex items-center"> 
            <i className="material-symbols-outlined mr1 text-sm">input</i><strong>Inputs</strong>
            </div>
            <div className="text-sm">
              <div>Code: 1045a77</div>
              <div>Image: {imageVersion}</div>
              <div>Terraform: 32.32</div>
              <div>Something: adsfasdf</div>
            </div>
            </div>
    
            <div className='w-1/2 bl br--black-075 pl3'>
            <div className="flex items-center"> 
            <i className="material-symbols-outlined mr1 text-sm">output</i><strong>Outputs</strong>
            </div>
            <div className="text-sm">
              <div>Code: 1045a77</div>
              <div>Image: {imageVersion}</div>
              <div>Terraform: 32.32</div>
              <div>Something: adsfasdf</div>
              <div>Something: adsfasdf</div>
              <div>Something: adsfasdf</div>
            </div>
            </div>
        </div>
          
        </div>
      )}
    </div>
    </div>
  );
});

export default RunItem;
