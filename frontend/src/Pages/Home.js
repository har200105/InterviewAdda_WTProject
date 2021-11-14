import React from 'react';
import Header from '../Component/Header';
import '../styles/Home.css';

const Home = () => {
  return (
    <>
      <Header />
      <div class="parent">
        <div class="left-container">
          <div class="item">
            <a href="#">
              Goldman Sachs Questions
            </a>
          </div>

          <div class="item">
            <a>
              Microsoft Questions
            </a>
          </div>


          <div class="item">
            <a>
              Facebook Questions
            </a>
          </div>


          <div class="item">
            <a>
              Amazon Questions
            </a>
          </div>

          <div class="item">
            <a>
              Google Questions
            </a>
          </div>

          <div class="item">
            <a>
              TCS Questions
            </a>
          </div>

          <div class="item">
            <a>
              Wipro Questions
            </a>
          </div>

          <div class="item">
            <a>
              Morgan Stanley Questions
            </a>
          </div>

          <div class="item">
            <a>
              Browser Stack Questions
            </a>
          </div>

          <div class="item">
            <a>
              Intuit Questions
            </a>
          </div>

        </div>
        <div class="right-container">
          <img src="/assets/bg.png" height="500px" width="95%" alt="" />
          <div class="list_top_questions">
            <div class="questions_box">
              <span class="question">
                Find the Maximum XOR of an Array
              </span>
              <a href="https://www.geeksforgeeks.org/find-the-maximum-subarray-xor-in-a-given-array/" target="__">
                <button class="solve_button">Solve</button>
              </a>
              <div class="companies_list">
                <p>Google</p>
                <p>Amazon</p>
                <p>Browser Stack</p>
                <p>Goldman Sachs</p>
              </div>

            </div>
          </div>

          <div class="list_top_questions">
            <div class="questions_box">
              <span class="question">

                Container With Maximum Water
              </span>

              <a href="https://www.geeksforgeeks.org/container-with-most-water/" target="__">
                <button class="solve_button">Solve</button>
              </a>

              <div class="companies_list">
                <p>Morgan Stanley</p>
              </div>

            </div>
          </div>

          <div class="list_top_questions">
            <div class="questions_box">
              <span class="question">
                Implement LRU Cache
              </span>

              <a href="https://www.geeksforgeeks.org/lru-cache-implementation/" target="__">
                <button class="solve_button">Solve</button>
              </a>

              <div class="companies_list">
                <p>Google</p>
                <p>Amazon</p>
                <p>Browser Stack</p>
                <p>Goldman Sachs</p>
              </div>

            </div>
          </div>

          <div class="list_top_questions">
            <div class="questions_box">
              <span class="question">
                Implement LFU Cache
              </span>

              <a href="https://leetcode.com/problems/lfu-cache/" target="__">
                <button class="solve_button">Solve</button>
              </a>

              <div class="companies_list">

                <p>Amazon</p>
                <p>Browser Stack</p>
              </div>

            </div>
          </div>

          <div class="list_top_questions">
            <div class="questions_box">
              <span class="question">
                Maximum XOR of an Array using Trie Data Structure
              </span>
              <a href="https://www.geeksforgeeks.org/find-the-maximum-subarray-xor-in-a-given-array/" target="__">
                <button class="solve_button">Solve</button>
              </a>

              <div class="companies_list">
                <p>Google</p>
                <p>Amazon</p>
              </div>

            </div>
          </div>

          <div class="list_top_questions">
            <div class="questions_box">
              <span class="question">

                Find the Top View of a Binary Tree

              </span>
              <a href="https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1" target="__">
                <button class="solve_button">Solve</button>
              </a>
              <div class="companies_list">
                <p>Google</p>
                <p>Microsoft</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home
