import React from "react";
import { render } from "@testing-library/react";
import { ProfileCard } from "../Components";

describe("ProfileCard",()=>{
    const props = {
        username: 'JohnDoe',
        imgurl: 'john-doe.jpg',
        userId: '12345',
        type: 'User',
        score: 100,
      };
    const testValue = {imgUrl:"https://img.url",score:12,type:"user",userId:"123",username:"abc"}
    it("Should display the correct Test Values",()=>{
        const {getByTestId} = render(<ProfileCard imgurl={testValue.imgUrl} score={testValue.score} type={testValue.type} userId={testValue.userId} username={testValue.username}/>)
        const score = getByTestId("userScore").textContent;
        const uname = getByTestId("userName").textContent;
        const userId = getByTestId("userId").textContent;
        const userType = getByTestId("userType").textContent;
        expect(uname).toBe(testValue.username);
        expect(score).toBe(`score : ${testValue.score}`);
        expect(userId).not.toBeNull()
        expect(userType).toBe(`Type : ${testValue.type}`)
     })
     it('matches snapshot', () => {
        const { container } = render(<ProfileCard {...props} />);
    
        // Check if the rendered component matches the snapshot
        expect(container).toMatchSnapshot();
      });
})