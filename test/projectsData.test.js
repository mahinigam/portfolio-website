import test from 'node:test'
import assert from 'node:assert/strict'
import { projectsData } from '../src/data/projectsData.js'

test('lists Breakpoint fourth and excludes Distributed Task Scheduler', () => {
  const breakpoint = projectsData[3]

  assert.equal(breakpoint.id, 'breakpoint')
  assert.equal(breakpoint.name, 'Breakpoint')
  assert.equal(breakpoint.repo, 'https://github.com/mahinigam/breakpoint')
  assert.match(breakpoint.utility, /200-feature LightGBM/)
  assert.match(breakpoint.utility, /Grow \/ Hold \/ Restrict/)
  assert.deepEqual(breakpoint.metrics, [
    ['Calibrated AUC', '0.9584'],
    ['Policy', 'Grow / Hold / Restrict'],
    ['Profit uplift', '+5.1% to +9.7%'],
    ['Worst-case regret', '1.83%'],
  ])
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
