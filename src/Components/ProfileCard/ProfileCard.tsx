import React from "react";
interface IProfileCardProps{
    username:string;
    imgurl:string;
    userId:string;
    score:number;
    type:string;
}

function ProfileCard({username,imgurl,userId,type,score}:IProfileCardProps) {
  return (
    <div>
      <div className="card w-96 bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 data-testid="userName"className="card-title capitalize">{username}</h2>
          <section className="mt-6 flex gap-7 items-center justify-center">
            <div className="avatar ">
              <div className="w-24 rounded-full bg-slate-50">
                <img src={imgurl} />
              </div>
            </div>
            <div className="flex-1  min-h-[96px] flex flex-col gap-4 justify-start items-start">
            <label data-testid="userId" className="capitalize">Id : {userId}</label>
            <label data-testid="userType" className="capitalize">Type : {type}</label>
            <label data-testid="userScore" className="capitalize">score : {score}</label>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ProfileCard);
