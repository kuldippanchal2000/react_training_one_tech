import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hello from '../pages/hello';
import Day2 from '../pages/day2';
import Day3 from '../pages/day3';
import Day4 from '../pages/day4';
import Day5 from '../pages/day5';
import Day7 from '../pages/day7';
import Day8 from '../pages/day8';
import Day10 from '../pages/day10';
import Search from '../component/search';
import List from '../component/list';
import Day11 from '../pages/day11';
import Day12 from '../pages/day12';
import Day13 from '../pages/day13/index';
import Day14 from '../pages/day14/index';
import Day15 from '../pages/day15/index';
import PageNotFound from '../component/pagenotfound';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Hello />} />
      <Route path="/day2" element={<Day2 />} />
      <Route path="/day3" element={<Day3 />} />
      <Route path="/day4" element={<Day4 />} />
      <Route path="/day5" element={<Day5 />} />
      <Route path="/day7" element={<Day7 />} />
      <Route path="/day8" element={<Day8 />} />

      <Route path="/day10" element={<Day10 />}>
        <Route path="search" element={<Search />} />
        <Route path="list" element={<List />} />
      </Route>
      <Route path="/day11" element={<Day11 />} />
      <Route path="/day12" element={<Day12 />} />
      <Route path="/day13" element={<Day13 />} />
      <Route path="/day14" element={<Day14 />} />
      <Route path="/day15" element={<Day15 />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
