import type { CallData } from '../types';

export const callData: CallData = {
  call: {
    call_id: "demo-001",
    title: "HVAC Service Call Analysis",
    call_type: "Repair and Sales Call",
    participants: [
      { id: "tech", role: "technician", display_name: "Field Service Rep" },
      { id: "cust", role: "customer", display_name: "Luis (Homeowner)" }
    ],
    meta: {
      duration_sec: 1938,
      service_completed: "AC Recharge",
      proposed_deal: "Heat Pump Installation",
      deal_value_net: 21142,
      close_probability: 0.65
    },
    kpis: {
      overall_score: 86.5,
      overall_grade: "B+",
      stage_scores: {
        introduction: 75,
        problem_diagnosis: 90,
        solution_explanation: 95,
        upsell_attempts: 95,
        maintenance_plan_offer: 80,
        closing_thank_you: 70
      }
    },
    // highlights: {
    //   top_strength: "Clear repair-to-replacement framing with quantified risk and detailed technical explanations.",
    //   top_risk: "Pushed for same-day deposit before customer aligned with spouse decision-maker.",
    //   top_sales_opportunity: "Offer concrete follow-up plan with written options and ROI snapshot."
    // }
  },
  transcript: {
    utterances: [
      // Introduction Stage (0:00 - 2:00)
      {
        utt_id: "u001",
        t_start_ms: 12160,
        t_end_ms: 19360,
        speaker_id: "tech",
        text: "Hey Luis, got you all done. The reason that took so long is I just kind of also built all your equipment options when I was out there too.",
        stage: "introduction"
      },
      {
        utt_id: "u002",
        t_start_ms: 19360,
        t_end_ms: 20320,
        speaker_id: "cust",
        text: "Okay, sure.",
        stage: "introduction"
      },
      {
        utt_id: "u003",
        t_start_ms: 20960,
        t_end_ms: 23360,
        speaker_id: "tech",
        text: "Um, I'd love to wrap up with you here.",
        stage: "introduction"
      },
      {
        utt_id: "u004",
        t_start_ms: 23360,
        t_end_ms: 24320,
        speaker_id: "cust",
        text: "Of course, of course.",
        stage: "introduction"
      },
      {
        utt_id: "u005",
        t_start_ms: 25840,
        t_end_ms: 27680,
        speaker_id: "tech",
        text: "So what are you up to for the rest of the day?",
        stage: "introduction"
      },
      {
        utt_id: "u006",
        t_start_ms: 35180,
        t_end_ms: 38780,
        speaker_id: "cust",
        text: "Yeah, yeah, most of the, most of the days. Sometimes I go to work.",
        stage: "introduction"
      },
      // Problem Diagnosis Stage (0:50 - 2:00)
      {
        utt_id: "u007",
        t_start_ms: 50140,
        t_end_ms: 84160,
        speaker_id: "tech",
        text: "An AI robot. Yeah, AI is a big thing, man. But, um, so just to— let's go right to just the differences here. I just wanted to show you, um, So remember before how we had that that, before, that, uh, below freezing temperature at 41? It's good to see. Um, and now we have that 20-degree difference as well. Okay. Uh, just did a really fancy charge there for you and got you in good shape. Okay. So all I can say, definitely band-aid. Sure. Yeah, yeah, it is.",
        stage: "problem_diagnosis"
      },
      {
        utt_id: "u008",
        t_start_ms: 84720,
        t_end_ms: 85760,
        speaker_id: "cust",
        text: "It's an old unit.",
        stage: "problem_diagnosis"
      },
      {
        utt_id: "u009",
        t_start_ms: 85990,
        t_end_ms: 111190,
        speaker_id: "tech",
        text: "Right? So when it comes to just what to expect here in the future, I would say a month to 2 months, I think we'll start to see, or even sooner, we'll start to see the efficiency drop again. And we still have those mold and those issues issues. Yeah, yeah, yeah. So I did just want to show you some different equipment options.",
        stage: "problem_diagnosis"
      },
      // Solution Explanation Stage (2:08 - 10:00)
      {
        utt_id: "u010",
        t_start_ms: 128110,
        t_end_ms: 197500,
        speaker_id: "tech",
        text: "There you go. Yeah, so the 2 equipment options, or there's a total of 4 that I built. There's either we replace like for like, which will naturally be more efficient even though it's just going to be the updated version of what you have. It's going to be a new furnace, new coil, new condenser, higher SEER rating, better efficiency, but still like the same type of equipment. The next step beyond that is maintaining gas heating, electric cooling, but upgrading efficiency. And the interesting thing about that is that actually ends up being the most expensive one of the 4 that I've built.",
        stage: "solution_explanation"
      },
      {
        utt_id: "u011",
        t_start_ms: 258070,
        t_end_ms: 344730,
        speaker_id: "tech",
        text: "Exactly. And so to start off with, it's always important to realize these are more expensive than investments than your normal investment into a home. So I just wanted you to understand that a lot of our clients do use different monthly options to take care of them. But let's just break down what we do. So let's start off with the like for like. Um, we always come with our guarantees. We have some really, really excellent guarantees that really just show you that we're going to do a great job for you.",
        stage: "solution_explanation"
      },
      {
        utt_id: "u012",
        t_start_ms: 449180,
        t_end_ms: 586500,
        speaker_id: "tech",
        text: "It's like an efficiency— it's a home efficiency test. Um, and I do know right now your home would not pass a HERS test, because of the condition of the ducting, and a little bit of your insulation too. We have the newest style here, R-32. This is basically just the new standard for refrigerant. It is considered to be better for the environment. It's just much less harmful to ozone layers. In general, 35% cooling savings, 30% heating savings. The SEER rating is up. You currently have a 12 SEER. We install a 15.",
        stage: "solution_explanation"
      },
      // Upsell Attempts Stage (3:18 - 15:30)
      {
        utt_id: "u013",
        t_start_ms: 198540,
        t_end_ms: 252110,
        speaker_id: "tech",
        text: "Yeah, really— it's a I like the idea, it's just kind of a lot. They want every house to have a 200-amp panel, they want every house to have a backup generator, they want every house to have solar, and they want every house to have a heat pump. And so heat pumps are the next option. Yeah, heat pumps are actually just got introduced some more rebates. So even though those are the best possible system to install, weirdly enough, those actually are getting quite affordable at the moment.",
        stage: "upsell_attempts"
      },
      {
        utt_id: "u014",
        t_start_ms: 587540,
        t_end_ms: 643620,
        speaker_id: "tech",
        text: "Actually, you know what? I saw your mini split. It actually mimics that technology, but in a ducted sense. So that's a ductless heating and cooling system. This one, we have that same type of inverter technology where it ramps up and ramps down. Except we're just attaching it to the ductwork. So the main difference here, it is important to realize that it's going to heat and cool a little bit differently. In general, everything is going to be an improvement. Cooling will be significantly better. Usually we're talking like 60% utility bill savings.",
        stage: "upsell_attempts"
      },
      {
        utt_id: "u015",
        t_start_ms: 707040,
        t_end_ms: 807710,
        speaker_id: "tech",
        text: "Okay, so you're good. So Silicon Valley Clean Energy is a $2,500 off towards heat pump updates. Next we have Tech, which is one that just barely got reintroduced like yesterday. So that's fantastic, that's really cool that it got introduced. And $1,500 off here, what this is, is the fact that we're removing both a furnace and AC qualifies you for this higher-end one.",
        stage: "upsell_attempts"
      },
      {
        utt_id: "u016",
        t_start_ms: 830010,
        t_end_ms: 928640,
        speaker_id: "tech",
        text: "So you can actually see what's kind of funny is it's relatively around the same price. And actually a little bit less expensive, weirdly. And what's really cool, I was actually talking to Alex, I was really impressed. I just built your best possible heat pump. This is like our branded unit, it's a Daikin. Daikin we love to work with because they really like us. If you ever look up Daikin products on Google and you like look up like install videos, you'll actually see my company installing them because we do the worldwide training for how to install Daikin.",
        stage: "upsell_attempts"
      },
      // Maintenance Plan Offer Stage
      {
        utt_id: "u017",
        t_start_ms: 530000,
        t_end_ms: 545000,
        speaker_id: "tech",
        text: "Now, a really cool thing: 10-year manufacturer warranty, 10-year compressor warranties. If you're on this maintenance program with us, we actually completely match the manufacturer warranties. It's essentially 10 years parts and 10-year manufacturer warranty.",
        stage: "maintenance_plan_offer"
      },
      {
        utt_id: "u018",
        t_start_ms: 545000,
        t_end_ms: 546000,
        speaker_id: "cust",
        text: "Got it.",
        stage: "maintenance_plan_offer",
        tags: ["acknowledgment"]
      },
      // Closing Stage (29:00 - 32:18)
      {
        utt_id: "u019",
        t_start_ms: 1061430,
        t_end_ms: 1066310,
        speaker_id: "cust",
        text: "Okay, okay. Yeah, what we don't like about it there is not so much the cabinet, it's the noise.",
        stage: "closing_thank_you",
        tags: ["concern", "noise"]
      },
      {
        utt_id: "u020",
        t_start_ms: 1073500,
        t_end_ms: 1110130,
        speaker_id: "tech",
        text: "Yeah. And what I can even do as an extra way to make that noise even better is if we swap the grill. So the grill right now has louvers, right? So when airflow is pulled in and it does this, that naturally creates noise. We can install an egg carton version that has just squares instead, and it's much, much better for airflow. And when that happens, it makes a lot quieter too. I did do a test one time on no change other than the grill, and it did decrease noise by 20%.",
        stage: "closing_thank_you"
      },
      {
        utt_id: "u021",
        t_start_ms: 1740000,
        t_end_ms: 1760000,
        speaker_id: "cust",
        text: "Okay, so look, I'd like to speak with my wife about all the options. Email me these, and then of course, let's go over what you did today, and then I'll just discuss this with my wife.",
        stage: "closing_thank_you",
        tags: ["decision-maker", "follow-up-request"]
      },
      {
        utt_id: "u022",
        t_start_ms: 1760000,
        t_end_ms: 1780000,
        speaker_id: "tech",
        text: "Sure, yeah. I like the idea of the thing being quieter and more efficient.",
        stage: "closing_thank_you"
      },
      {
        utt_id: "u023",
        t_start_ms: 1780000,
        t_end_ms: 1800000,
        speaker_id: "cust",
        text: "Yeah. And not having gas leaks in the future.",
        stage: "closing_thank_you",
        tags: ["buying-signal", "safety-concern"]
      },
      {
        utt_id: "u024",
        t_start_ms: 1800000,
        t_end_ms: 1850000,
        speaker_id: "tech",
        text: "Yeah, so how about this? Let me bring the estimates down to just two of them. I'll just eliminate this one. And the only thing I just want to make sure is clear, on my end, it would be so much easier if I didn't have to charge for the repair today, and if we actually just basically considered it as a complimentary thing for you. So if we did feel comfortable with signing, what that would just look like on your end would just be a $1,000 down payment.",
        stage: "closing_thank_you"
      },
      {
        utt_id: "u025",
        t_start_ms: 1850000,
        t_end_ms: 1870000,
        speaker_id: "cust",
        text: "Yeah, no, we won't do that today. You send me the information. Yeah, I'll talk to her. And then we'll make a decision.",
        stage: "closing_thank_you",
        tags: ["objection", "decision-defer"]
      },
      {
        utt_id: "u026",
        t_start_ms: 1870000,
        t_end_ms: 1900000,
        speaker_id: "tech",
        text: "Absolutely. And then, within 15 days, I will completely credit that back towards it. Okay, so, I'm gonna pretty these estimates up a little bit more, and I'll include the duct sealing promotion. And because tech is needing a HERS test, we actually just kind of have to do that anyways.",
        stage: "closing_thank_you"
      },
      {
        utt_id: "u027",
        t_start_ms: 1900000,
        t_end_ms: 1938000,
        speaker_id: "tech",
        text: "So great. We'll go ahead, I'll eliminate both of the gas options, and we'll stay with the Bryant and the Bosch. And very cool. And let me go ahead and get the $1,000 for today.",
        stage: "closing_thank_you"
      }
    ],
    stages: [
      { stage: "introduction", label: "Introduction", t_start_ms: 0, t_end_ms: 50000, utt_ids: ["u001", "u002", "u003", "u004", "u005", "u006"] },
      { stage: "problem_diagnosis", label: "Problem Diagnosis", t_start_ms: 50000, t_end_ms: 128000, utt_ids: ["u007", "u008", "u009"] },
      { stage: "solution_explanation", label: "Solution Explanation", t_start_ms: 128000, t_end_ms: 600000, utt_ids: ["u010", "u011", "u012"] },
      { stage: "upsell_attempts", label: "Upsell Attempts", t_start_ms: 198000, t_end_ms: 930000, utt_ids: ["u013", "u014", "u015", "u016"] },
      { stage: "maintenance_plan_offer", label: "Maintenance Plan", t_start_ms: 530000, t_end_ms: 600000, utt_ids: ["u017", "u018"] },
      { stage: "closing_thank_you", label: "Closing & Thank You", t_start_ms: 1060000, t_end_ms: 1938000, utt_ids: ["u019", "u020", "u021", "u022", "u023", "u024", "u025", "u026", "u027"] }
    ]
  },
  analysis: {
    stages: [
      {
        stage: "introduction",
        status: "partial",
        claim: "Good rapport established but missing formal professional introduction with name, company, and call agenda.",
        evidence: [
          {
            evidence_id: "e-intro-1",
            utt_id: "u001",
            quote: "Hey Luis, got you all done... built all your equipment options",
            why_it_matters: "Friendly tone but lacks structured opener with company identification and agenda-setting."
          }
        ],
        impact: [
          "Weaker professional authority established",
          "Customer expectations not clearly set for the sales conversation",
          "Missed opportunity to frame the interaction professionally"
        ],
        recommendations: [
          "Add a 10-second professional opener: name, company name, and what will be covered",
          "Mirror customer's primary goal early (comfort, cost, urgency) to anchor later options",
          "Confirm time availability before diving into options"
        ]
      },
      {
        stage: "problem_diagnosis",
        status: "good",
        claim: "Strong technical diagnosis with clear explanation of temporary repair nature and future expectations.",
        evidence: [
          {
            evidence_id: "e-diag-1",
            utt_id: "u007",
            quote: "below freezing temperature at 41... now we have that 20-degree difference",
            why_it_matters: "Quantified the problem and improvement, building credibility with data."
          },
          {
            evidence_id: "e-diag-2",
            utt_id: "u009",
            quote: "month to 2 months... we'll start to see the efficiency drop again",
            why_it_matters: "Sets realistic expectations and creates urgency for replacement consideration."
          }
        ],
        impact: [
          "Customer understands the temporary nature of the repair",
          "Creates natural transition to discussing replacement options",
          "Builds trust through honest assessment"
        ],
        recommendations: [
          "Could have documented and shown before/after readings more visually",
          "Consider capturing customer acknowledgment of equipment age issues on recording"
        ]
      },
      {
        stage: "solution_explanation",
        status: "excellent",
        claim: "Comprehensive technical explanation of all four equipment options with clear differentiation and pricing transparency.",
        evidence: [
          {
            evidence_id: "e-sol-1",
            utt_id: "u010",
            quote: "4 options... replace like for like... new furnace, new coil, new condenser, higher SEER rating",
            why_it_matters: "Structured presentation of options builds customer understanding and trust."
          },
          {
            evidence_id: "e-sol-2",
            utt_id: "u012",
            quote: "R-32 refrigerant... 35% cooling savings, 30% heating savings... SEER rating up from 12 to 15",
            why_it_matters: "Quantified benefits help customer understand value proposition."
          }
        ],
        impact: [
          "Customer has clear understanding of all options",
          "Technical credibility well established",
          "Foundation laid for informed decision-making"
        ],
        recommendations: [
          "Create a simple visual comparison chart for options",
          "Summarize key differentiators in 3 bullets after detailed explanation"
        ]
      },
      {
        stage: "upsell_attempts",
        status: "excellent",
        claim: "Masterful positioning of heat pumps through rebate stacking and regulatory context, making premium options financially accessible.",
        evidence: [
          {
            evidence_id: "e-upsell-1",
            utt_id: "u013",
            quote: "heat pumps are actually just got introduced some more rebates... getting quite affordable",
            why_it_matters: "Frames premium option as accessible through incentives."
          },
          {
            evidence_id: "e-upsell-2",
            utt_id: "u015",
            quote: "Silicon Valley Clean Energy is a $2,500 off... Tech... $1,500 off",
            why_it_matters: "Specific rebate amounts create tangible savings understanding."
          },
          {
            evidence_id: "e-upsell-3",
            utt_id: "u016",
            quote: "Daikin... we do the worldwide training for how to install Daikin",
            why_it_matters: "Establishes company expertise and partnership credibility."
          }
        ],
        impact: [
          "Customer sees heat pump as viable, not just premium option",
          "Multiple rebates stacked effectively to reduce perceived cost",
          "Company expertise highlighted through manufacturer relationship"
        ],
        recommendations: [
          "Create a rebate summary sheet customer can take away",
          "Include estimated annual savings on utility bills"
        ]
      },
      {
        stage: "maintenance_plan_offer",
        status: "good",
        claim: "Maintenance program mentioned as warranty enhancer but not fully explored as standalone value proposition.",
        evidence: [
          {
            evidence_id: "e-maint-1",
            utt_id: "u017",
            quote: "10-year manufacturer warranty... maintenance program... completely match the manufacturer warranties",
            why_it_matters: "Connects maintenance to warranty protection but doesn't detail program benefits."
          }
        ],
        impact: [
          "Customer understands warranty benefit of maintenance",
          "Missed opportunity to discuss ongoing relationship value",
          "Plan presented as feature, not separate value proposition"
        ],
        recommendations: [
          "Present maintenance plan pricing and specific benefits",
          "Explain what maintenance visits include and frequency",
          "Connect maintenance to system longevity and performance",
          "Offer maintenance plan as standalone option regardless of equipment decision"
        ]
      },
      {
        stage: "closing_thank_you",
        status: "needs_improvement",
        claim: "Customer clearly requested email follow-up and spouse alignment, but technician pushed for same-day deposit.",
        evidence: [
          {
            evidence_id: "e-close-1",
            utt_id: "u021",
            quote: "I'd like to speak with my wife about all the options. Email me these",
            why_it_matters: "Clear decision process signal requiring respectful accommodation."
          },
          {
            evidence_id: "e-close-2",
            utt_id: "u025",
            quote: "Yeah, no, we won't do that today. You send me the information",
            why_it_matters: "Customer explicitly declined same-day commitment, but technician still collected payment."
          },
          {
            evidence_id: "e-close-3",
            utt_id: "u023",
            quote: "And not having gas leaks in the future",
            why_it_matters: "Strong buying signal indicating customer values safety - opportunity to reinforce."
          }
        ],
        impact: [
          "Risk of damaging trust by not respecting stated decision process",
          "Potential for buyer's remorse or cancellation",
          "Missed opportunity to schedule specific follow-up with both decision makers"
        ],
        recommendations: [
          "Acknowledge spouse decision-making need and schedule specific follow-up time",
          "Send written proposal within 24 hours with clear option comparison and ROI",
          "Follow up to schedule call with both decision makers present",
          "Avoid pushing for deposit when customer has explicitly requested time"
        ]
      }
    ],
    sales_insights: {
      what_went_well: [
        "Used rebate stacking ($2,500 SVCE + $1,500 Tech) to position premium heat pump as affordable",
        "Established technical credibility through detailed explanations and Daikin partnership",
        "Quantified problem (temperature readings) and benefits (35% cooling, 30% heating savings)",
        "Addressed noise concerns proactively with grill swap option (20% quieter)",
        "Presented financing options clearly with multiple term lengths"
      ],
      what_was_missed: [
        "Did not lock specific follow-up time after customer requested email",
        "Pushed for same-day $1,000 deposit despite customer's stated decision process",
        "No formal introduction with company name and call agenda",
        "Maintenance plan presented only as warranty feature, not standalone value",
        "Did not create urgency around rebate expiration or limited availability"
      ],
      buying_signals: [
        { signal: "Interest in quieter and more efficient systems", utt_id: "u019", confidence: 0.85 },
        { signal: "Concern about gas leaks indicating safety priority", utt_id: "u023", confidence: 0.90 },
        { signal: "Decision-maker alignment needed (spouse)", utt_id: "u021", confidence: 0.95 },
        { signal: "Narrowed options to two heat pumps (Bryant and Bosch)", confidence: 0.88 },
        { signal: "Asked about financing terms indicating affordability consideration", confidence: 0.82 }
      ],
      follow_up_strategy: [
        { action: "Email written proposal with Bryant vs Bosch comparison, rebates, and monthly payment options", owner: "office", due_in_hours: 24 },
        { action: "Schedule 15-minute follow-up call with both Luis and spouse", owner: "tech", due_in_hours: 48 },
        { action: "Prepare ROI snapshot showing utility savings vs monthly payment", owner: "office", due_in_hours: 24 },
        { action: "Include rebate expiration dates to create appropriate urgency", owner: "office", due_in_hours: 24 }
      ]
    },
    tooling_disclosure: {
      transcription_tool: "AssemblyAI Universal-3-Pro",
      analysis_tooling: ["OpenAI GPT-4o analysis", "Manual verification against transcript"],
      notes: "All insights verified against quoted utterances. Confidence scores reflect AI certainty levels."
    }
  }
};
