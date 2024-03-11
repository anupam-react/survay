import React from 'react'
import LineChart from './LineChart'
import JobCard from './JobCard'
import MemberList from './MemberList'

const Dashboard = () => {
  return (
    <div>
      <div className="flex gap-4 mb-4">
      <LineChart />
      <JobCard />
      </div>
      <MemberList />
    </div>
  )
}

export default Dashboard
