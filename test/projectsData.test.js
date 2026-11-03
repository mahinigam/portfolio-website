import test from 'node:test'
import assert from 'node:assert/strict'
import { projectsData } from '../src/data/projectsData.js'

test('lists Breakpoint fourth and excludes Distributed Task Scheduler', () => {
  assert.equal(projectsData[3].id, 'breakpoint')
  assert.equal(projectsData[3].name, 'Breakpoint')
  assert.equal(projectsData.some(({ id }) => id === 'task-scheduler'), false)
  assert.deepEqual(projectsData.map(({ index }) => index), [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
  ])
})
