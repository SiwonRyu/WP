---
layout: default
title: "Research"
permalink: /research/
---
<!--
<div style="margin-top: 50px;">
</div>abc
-->

<img src="/assets/images/wp.png" alt="Icon"  width="30" height="30" style="vertical-align:middle; margin-right:15px; margin-top: 4px;">Working Papers
======
<div class="item_container">
    <div class="item_title active"> 
        <span class="arrow"></span>
        <span class="text">
            “Decomposition of Causal Effect Accounting for Network Change” (Job market paper)
        </span>        
    </div>
    <div class="item_content expanded">
        {% capture my_include %}{% include research/JMP_detail.md %}{% endcapture %}
            {{ my_include | markdownify }}
    </div>
</div>
<div class="item_container">
    <div class="item_title"> 
        <span class="arrow"></span>
        <span class="text">
            “Local Average Treatment Effects with Imperfect Compliance and Interference” (Submitted, <i>Journal of Econometrics</i>)
        </span>        
    </div>
    <div class="item_content">
        {% capture my_include %}{% include research/3YP_detail.md %}{% endcapture %}
            {{ my_include | markdownify }}
    </div>
</div>
<div class="item_container">
    <div class="item_title"> 
        <span class="arrow"></span>
        <span class="text">
            “Direct and Indirect Treatment Effects with Social Interaction”
        </span>        
    </div>
    <div class="item_content">
        {% capture my_include %}{% include research/2YP_detail.md %}{% endcapture %}
            {{ my_include | markdownify }}
    </div>
</div>


<!--
  * Estimation Package: [Stata, Matlab, Python, Julia, R]
  * Simulation: [[Matlab]](https://github.com/SiwonRyu/3YP_Simulation)
  * Empirical Application: [Stata]
-->

<div style="margin-top: 50px;"></div>

<img src="/assets/images/wip.png" alt="Icon"  width="30" height="30" style="vertical-align:middle; margin-right:15px; margin-top: 4px;">Work in Progress
======
<div class="item_container">
    <div class="item_title"> 
        <span class="arrow"></span>     
        <span class="text">
            “Heterogeneous Parental Labor Supply Responses to Children’s Severe Health Shocks: Evidence from Administrative Data from South Korea (with Jungmin Lee and Hyuncheol Bryant Kim)”
        </span>        
    </div>
    <div class="item_content">
        {% capture my_include %}{% include research/CC_detail.md %}{% endcapture %}
        {{ my_include | markdownify }}
    </div>
</div>