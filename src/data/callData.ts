import type { CallData } from '../src/types';

export const callData: CallData = {
  call: {
    call_id: "demo-001",
    title: "HVAC Service Call Analysis",
    call_type: "Repair + Replacement Sales Call",
    participants: [
      { id: "tech", role: "technician", display_name: "Field Technician (Speaker A)" },
      { id: "cust", role: "customer", display_name: "Luis (Homeowner, Speaker B)" }
    ],
    meta: {
      duration_sec: 1938,
      service_completed: "AC Refrigerant Recharge (Band-Aid Fix)",
      proposed_deal: "Heat Pump System Replacement (Bryant or Bosch)",
      deal_value_net: 26400,
      close_probability: 0.70
    },
    kpis: {
      overall_score: 82,
      overall_grade: "B",
      stage_scores: {
        introduction: 65,
        problem_diagnosis: 88,
        solution_explanation: 92,
        upsell_attempts: 93,
        maintenance_plan_offer: 55,
        closing_thank_you: 60
      }
    },
  },
  transcript: {
    utterances: [
      // ===== INTRODUCTION (0:12 – 0:50) =====
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
      {
        utt_id: "u007",
        t_start_ms: 39000,
        t_end_ms: 43000,
        speaker_id: "tech",
        text: "I literally can't work from anywhere else but your home.",
        stage: "introduction"
      },

      // ===== PROBLEM DIAGNOSIS (0:50 – 2:08) =====
      {
        utt_id: "u008",
        t_start_ms: 50140,
        t_end_ms: 84160,
        speaker_id: "tech",
        text: "An AI robot. Yeah, AI is a big thing, man. But, um, so just to— let's go right to just the differences here. I just wanted to show you, um, So remember before how we had that that, before, that, uh, below freezing temperature at 41? It's good to see. Um, and now we have that 20-degree difference as well. Uh, just did a really fancy charge there for you and got you in good shape. So all I can say, definitely band-aid.",
        stage: "problem_diagnosis"
      },
      {
        utt_id: "u009",
        t_start_ms: 84720,
        t_end_ms: 85760,
        speaker_id: "cust",
        text: "It's an old unit.",
        stage: "problem_diagnosis",
        tags: ["acknowledgment", "equipment-age"]
      },
      {
        utt_id: "u010",
        t_start_ms: 85990,
        t_end_ms: 111190,
        speaker_id: "tech",
        text: "Right? So when it comes to just what to expect here in the future, I would say a month to 2 months, I think we'll start to see, or even sooner, we'll start to see the efficiency drop again. And we still have those mold and those issues. So I did just want to show you some different equipment options.",
        stage: "problem_diagnosis"
      },

      // ===== SOLUTION EXPLANATION: Equipment Options Overview (2:08 – 4:18) =====
      {
        utt_id: "u011",
        t_start_ms: 128110,
        t_end_ms: 197500,
        speaker_id: "tech",
        text: "Yeah, so the 2 equipment options, or there's a total of 4 that I built. There's either we replace like for like, which will naturally be more efficient even though it's just going to be the updated version of what you have. It's going to be a new furnace, new coil, new condenser, higher SEER rating, better efficiency, but still like the same type of equipment. The next step beyond that is maintaining gas heating, electric cooling, but upgrading efficiency. And the interesting thing about that is that actually ends up being the most expensive one of the 4 that I've built.",
        stage: "solution_explanation"
      },
      // Gas phase-out context & heat pump intro
      {
        utt_id: "u012",
        t_start_ms: 197500,
        t_end_ms: 252110,
        speaker_id: "tech",
        text: "Are you familiar with natural gas phase-outs? Okay, so it is something like, let's say for instance, like we have stovetops being phased out, we do have gas water heaters being phased out, we have gas furnaces being phased out. Are you familiar with what California's goal is and everything? They want every house to have a 200-amp panel, they want every house to have a backup generator, they want every house to have solar, and they want every house to have a heat pump. And so heat pumps are the next option. Heat pumps actually just got introduced some more rebates. So even though those are the best possible system to install, weirdly enough, those actually are getting quite affordable at the moment.",
        stage: "solution_explanation"
      },
      {
        utt_id: "u013",
        t_start_ms: 252110,
        t_end_ms: 253500,
        speaker_id: "cust",
        text: "To light, higher efficiency, and then two different types of heat pumps. Still same technology, and then two heat pumps.",
        stage: "solution_explanation",
        tags: ["customer-summary", "comprehension-check"]
      },
      // Detailed line-item walkthrough
      {
        utt_id: "u014",
        t_start_ms: 258070,
        t_end_ms: 344730,
        speaker_id: "tech",
        text: "Exactly. And so to start off with, it's always important to realize these are more expensive investments than your normal investment into a home. So I just wanted you to understand that a lot of our clients do use different monthly options to take care of them. But let's just break down what we do. So let's start off with the like for like. We always come with our guarantees. We have some really excellent guarantees that really just show you that we're going to do a great job for you.",
        stage: "solution_explanation"
      },
      // HERS test & duct condition
      {
        utt_id: "u015",
        t_start_ms: 449180,
        t_end_ms: 480000,
        speaker_id: "tech",
        text: "It's like an efficiency— it's a home efficiency test. And I do know right now your home would not pass a HERS test, because of the condition of the ducting, and a little bit of your insulation too. So we'd love to do HERS tests, but in order for us to feel confident in doing that, we would need to do a little bit with your ducting or consider modifying it. What that would look like is something we do have a promotion going on currently is sealing your ductwork.",
        stage: "solution_explanation"
      },
      // Refrigerant & SEER upgrade details
      {
        utt_id: "u016",
        t_start_ms: 500000,
        t_end_ms: 545000,
        speaker_id: "tech",
        text: "We have the newest style here, R-32. This is basically just the new standard for refrigerant. It is considered to be better for the environment. It's just much less harmful to ozone layers. In general, 35% cooling savings, 30% heating savings. The SEER rating is up. You currently have a 12 SEER. We install a 15. And then we always include standard filtration for you as basic. The motor is an improvement, so the fan motor inside of the system is an improvement. Way more reliable and way quieter.",
        stage: "solution_explanation"
      },
      // Warranty mention (also relevant to maintenance)
      {
        utt_id: "u017",
        t_start_ms: 545000,
        t_end_ms: 560000,
        speaker_id: "tech",
        text: "Now, a really cool thing: 10-year manufacturer warranty, 10-year compressor warranties. If you're on this maintenance program with us, we actually completely match the manufacturer warranties. It's essentially 10 years parts and 10-year manufacturer warranty.",
        stage: "maintenance_plan_offer"
      },
      {
        utt_id: "u018",
        t_start_ms: 560000,
        t_end_ms: 561000,
        speaker_id: "cust",
        text: "Got it.",
        stage: "maintenance_plan_offer",
        tags: ["acknowledgment"]
      },

      // ===== UPSELL: Heat Pump Deep Dive (9:46 – 15:30) =====
      // Inverter technology explanation
      {
        utt_id: "u019",
        t_start_ms: 587540,
        t_end_ms: 643620,
        speaker_id: "tech",
        text: "Actually, you know what? I saw your mini split. It actually mimics that technology, but in a ducted sense. So that's a ductless heating and cooling system. This one, we have that same type of inverter technology where it ramps up and ramps down. Except we're just attaching it to the ductwork. In general, everything is going to be an improvement. Cooling will be significantly better. Usually we're talking like 60% utility bill savings.",
        stage: "upsell_attempts"
      },
      {
        utt_id: "u020",
        t_start_ms: 643620,
        t_end_ms: 645000,
        speaker_id: "cust",
        text: "I'm familiar with it.",
        stage: "upsell_attempts",
        tags: ["product-knowledge"]
      },
      // Rebate stacking: SVCE + Tech
      {
        utt_id: "u021",
        t_start_ms: 707040,
        t_end_ms: 807710,
        speaker_id: "tech",
        text: "Okay, so you're good. So Silicon Valley Clean Energy is a $2,500 off towards heat pump updates. Next we have Tech, which is one that just barely got reintroduced like yesterday. So that's fantastic, that's really cool that it got introduced. And $1,500 off here, what this is, is the fact that we're removing both a furnace and AC qualifies you for this higher-end one.",
        stage: "upsell_attempts"
      },
      // Daikin partnership credibility
      {
        utt_id: "u022",
        t_start_ms: 830010,
        t_end_ms: 928640,
        speaker_id: "tech",
        text: "So you can actually see what's kind of funny is it's relatively around the same price. And actually a little bit less expensive, weirdly. I just built your best possible heat pump. This is like our branded unit, it's a Daikin. Daikin we love to work with because they really like us. If you ever look up Daikin products on Google and you like look up like install videos, you'll actually see my company installing them because we do the worldwide training for how to install Daikin.",
        stage: "upsell_attempts"
      },
      // Bryant defrost advantage
      {
        utt_id: "u023",
        t_start_ms: 928640,
        t_end_ms: 960000,
        speaker_id: "tech",
        text: "But what's interesting is Bryant does have a corner on a type of technology. Heat pumps on occasion enter a defrost cycle, which is where it briefly stops heating and it just runs itself alone to heat itself back up. These are known to not really enter that, and it's just because of the way their coils are built. They have a better type of metal derivative in it that is better at dissipating its own heat. The only time these ever enter defrost, which we won't ever get to here in California, is when they enter 18 degrees Fahrenheit.",
        stage: "upsell_attempts"
      },

      // ===== CONSULTATION: Installation Location (15:29 – 17:41) =====
      {
        utt_id: "u024",
        t_start_ms: 929000,
        t_end_ms: 935000,
        speaker_id: "cust",
        text: "None of these options moving the unit to the top?",
        stage: "solution_explanation",
        tags: ["customer-question", "installation-location"]
      },
      {
        utt_id: "u025",
        t_start_ms: 935000,
        t_end_ms: 970000,
        speaker_id: "tech",
        text: "No, currently I haven't built that. We do have an attic package I would actually have to modify these estimates to do that. The reason I'm starting like this is just, I just wanted you to understand what it would look like to keep it in the closet. When it comes to keeping it in the closet, we are completely fine moving it to your attic. The thing I like to make sure my clients understand is serviceability, maintenance, and efficiency. That is the best location.",
        stage: "solution_explanation"
      },
      {
        utt_id: "u026",
        t_start_ms: 970000,
        t_end_ms: 972000,
        speaker_id: "cust",
        text: "Yeah, because it's too hot up there.",
        stage: "solution_explanation"
      },
      {
        utt_id: "u027",
        t_start_ms: 972000,
        t_end_ms: 974000,
        speaker_id: "cust",
        text: "What about moving it to the garage?",
        stage: "solution_explanation",
        tags: ["customer-question"]
      },
      {
        utt_id: "u028",
        t_start_ms: 974000,
        t_end_ms: 1000000,
        speaker_id: "tech",
        text: "That would be way harder. So much more work. We would actually be forced to replace your ductwork entirely. And with this, the benefit of moving it up to the attic though is you do get a full closet. I do think it adds like at least $4,000 to it. But on the highest end, it would involve new ductwork, and then we'd add a fair amount to it.",
        stage: "solution_explanation"
      },

      // ===== CONSULTATION: Noise Concerns (17:41 – 19:30) =====
      {
        utt_id: "u029",
        t_start_ms: 1061430,
        t_end_ms: 1066310,
        speaker_id: "cust",
        text: "Yeah, what we don't like about it there is not so much the cabinet, it's the noise.",
        stage: "solution_explanation",
        tags: ["concern", "noise"]
      },
      {
        utt_id: "u030",
        t_start_ms: 1073500,
        t_end_ms: 1110130,
        speaker_id: "tech",
        text: "Yeah. And what I can even do as an extra way to make that noise even better is if we swap the grill. So the grill right now has louvers, right? When airflow is pulled in, that naturally creates noise. We can install an egg carton version that has just squares instead, and it's much better for airflow. I did do a test one time on no change other than the grill, and it did decrease noise by 20%.",
        stage: "solution_explanation"
      },
      {
        utt_id: "u031",
        t_start_ms: 1110130,
        t_end_ms: 1140000,
        speaker_id: "tech",
        text: "If we talk about inverters, those actually can sometimes be hardly even on type of thing. Like, you just— do you even hear it running?",
        stage: "solution_explanation"
      },
      {
        utt_id: "u032",
        t_start_ms: 1140000,
        t_end_ms: 1145000,
        speaker_id: "cust",
        text: "So, okay, okay, that makes sense. Yeah, I can hear it with the split unit.",
        stage: "solution_explanation",
        tags: ["existing-experience"]
      },

      // ===== CONSULTATION: Bosch Option & Top-Vent Preference (20:15 – 24:18) =====
      {
        utt_id: "u033",
        t_start_ms: 1215000,
        t_end_ms: 1221000,
        speaker_id: "cust",
        text: "I see that all these are— this one vents to the side.",
        stage: "upsell_attempts",
        tags: ["observation"]
      },
      {
        utt_id: "u034",
        t_start_ms: 1238000,
        t_end_ms: 1246000,
        speaker_id: "cust",
        text: "Yeah, yeah, yeah. But my experience with the other one is that it vents to the side, so it's kind of windy. Yeah, and what I like about this one is that it vents to the top.",
        stage: "upsell_attempts",
        tags: ["preference", "top-vent"]
      },
      {
        utt_id: "u035",
        t_start_ms: 1262000,
        t_end_ms: 1310000,
        speaker_id: "tech",
        text: "The brand is Bosch, very highly reviewed, mostly actually highly reviewed from technicians, which is very cool. Technicians love working on them because they're very reliable. But you see how this says Energy Star high heat? Whenever you see Energy Star, that actually can qualify you for one further rebate that you have to deal with completely on your own. We can't help you. It's a tax cut rebate, and usually if you qualify for it, it's either $1,000 or $2,000.",
        stage: "upsell_attempts"
      },
      {
        utt_id: "u036",
        t_start_ms: 1310000,
        t_end_ms: 1320000,
        speaker_id: "cust",
        text: "And Bosch doesn't have that?",
        stage: "upsell_attempts",
        tags: ["customer-question"]
      },
      {
        utt_id: "u037",
        t_start_ms: 1320000,
        t_end_ms: 1340000,
        speaker_id: "tech",
        text: "Okay, let me just modify this estimate to be a Bosch. Okay, it does have Energy Star on it. So the difference is this one will have— it won't have the high heat feature.",
        stage: "upsell_attempts"
      },
      // Customer's past heat pump experience
      {
        utt_id: "u038",
        t_start_ms: 1442000,
        t_end_ms: 1450000,
        speaker_id: "cust",
        text: "I had a heat pump before in another place, never had a problem with it. Yeah, here and it was 20 years ago, and it was here in California.",
        stage: "upsell_attempts",
        tags: ["past-experience", "buying-signal"]
      },

      // ===== CUSTOMER DECISION POINT (25:01 – 25:23) =====
      {
        utt_id: "u039",
        t_start_ms: 1501000,
        t_end_ms: 1516000,
        speaker_id: "cust",
        text: "Okay, okay. And, um, all right, I understand the options. That's fine. I'm not— I would be interested on, on, on the heat pump, maybe these two. I'm not interested on the gas.",
        stage: "upsell_attempts",
        tags: ["decision-point", "gas-rejected", "heat-pump-selected"]
      },
      {
        utt_id: "u040",
        t_start_ms: 1516000,
        t_end_ms: 1523000,
        speaker_id: "cust",
        text: "And then the other thing I noticed is that you also have financing. So for financing, can you show me the monthly payment and for how long is that?",
        stage: "upsell_attempts",
        tags: ["financing-interest"]
      },

      // ===== FINANCING DISCUSSION (25:27 – 29:04) =====
      {
        utt_id: "u041",
        t_start_ms: 1527000,
        t_end_ms: 1590000,
        speaker_id: "tech",
        text: "So we have different options. Let's go to the Bosch since that's the one that you like the idea of having airflow up. We'll look at financing. So we have a 120-month, 8.99% interest with autopay. 180-month, so much longer term, with 9.99%. These two are our most commonly used. GoodLeap actually just barely gave us access to this this month. The 12 months no interest just means that if you do pay it off in 12 months, you just pay the same as cash, like there's no interest rate or anything.",
        stage: "upsell_attempts"
      },
      {
        utt_id: "u042",
        t_start_ms: 1606000,
        t_end_ms: 1614000,
        speaker_id: "cust",
        text: "60 months, so 5 years of 5-year, uh, $335 a month, and that includes the promotions area.",
        stage: "upsell_attempts",
        tags: ["price-verification"]
      },
      {
        utt_id: "u043",
        t_start_ms: 1634000,
        t_end_ms: 1650000,
        speaker_id: "cust",
        text: "And what is the monthly payment with the one that you showed me that I can pay off earlier?",
        stage: "upsell_attempts",
        tags: ["financing-question"]
      },
      {
        utt_id: "u044",
        t_start_ms: 1650000,
        t_end_ms: 1700000,
        speaker_id: "tech",
        text: "In a year? That type of one? So you don't need to pay anything for a full year if you don't want. You actually do have the ability to take a year off of payments entirely. But then if it goes to that, I think it's not a nasty interest rate, it's something around 10%. So if we did pay it off in 12 payments, let's say, it would be a little bit over $2,000 a month. Because it's within a year.",
        stage: "upsell_attempts"
      },
      {
        utt_id: "u045",
        t_start_ms: 1700000,
        t_end_ms: 1740000,
        speaker_id: "tech",
        text: "But then I think the terms actually go really, really close. 5 years of, I think, 9.99% from there. But the nice thing though is let's say you don't pay it off in full. Let's say you go to the year and maybe you put $18,000 down. So we still have a remaining balance of $8,422. What then happens is that interest only applies to that remaining balance. So that would then— yeah, so we just get that remaining amount and then divide it by 60.",
        stage: "upsell_attempts"
      },
      {
        utt_id: "u046",
        t_start_ms: 1740000,
        t_end_ms: 1744000,
        speaker_id: "cust",
        text: "Get it. For 5 more years. But yeah, but then you can pay it off early and it's no big deal.",
        stage: "upsell_attempts",
        tags: ["comprehension"]
      },

      // ===== CLOSING (29:09 – 32:18) =====
      {
        utt_id: "u047",
        t_start_ms: 1749000,
        t_end_ms: 1765000,
        speaker_id: "cust",
        text: "Okay, so look, I'd like to speak with my wife about all the options. Email me these, and then of course, let's go over what you did today, and then I'll just discuss this with my wife.",
        stage: "closing_thank_you",
        tags: ["decision-maker", "follow-up-request", "spouse-alignment"]
      },
      {
        utt_id: "u048",
        t_start_ms: 1765000,
        t_end_ms: 1770000,
        speaker_id: "tech",
        text: "Sure, yeah.",
        stage: "closing_thank_you"
      },
      {
        utt_id: "u049",
        t_start_ms: 1770000,
        t_end_ms: 1778000,
        speaker_id: "cust",
        text: "I like the idea of the thing being quieter and more efficient.",
        stage: "closing_thank_you",
        tags: ["buying-signal", "positive-sentiment"]
      },
      {
        utt_id: "u050",
        t_start_ms: 1778000,
        t_end_ms: 1785000,
        speaker_id: "cust",
        text: "And not having gas leaks in the future.",
        stage: "closing_thank_you",
        tags: ["buying-signal", "safety-concern"]
      },
      {
        utt_id: "u051",
        t_start_ms: 1785000,
        t_end_ms: 1845000,
        speaker_id: "tech",
        text: "Yeah, so how about this? Let me bring the estimates down to just two of them. I'll just eliminate this one. And the only thing I just want to make sure is clear, on my end, it would be so much easier if I didn't have to charge for the repair today, and if we actually just basically considered it as a complimentary thing for you. So if we did feel comfortable with signing, what that would just look like on your end would just be a $1,000 down payment.",
        stage: "closing_thank_you"
      },
      {
        utt_id: "u052",
        t_start_ms: 1845000,
        t_end_ms: 1865000,
        speaker_id: "cust",
        text: "Yeah, no, we won't do that today. You send me the information. Yeah, I'll talk to her. And then we'll make a decision.",
        stage: "closing_thank_you",
        tags: ["objection", "decision-defer"]
      },
      {
        utt_id: "u053",
        t_start_ms: 1865000,
        t_end_ms: 1900000,
        speaker_id: "tech",
        text: "Absolutely. And then, within 15 days, I will completely credit that back towards it. Okay, so, I'm gonna pretty these estimates up a little bit more, and I'll include the duct sealing promotion. And because tech is needing a HERS test, we actually just kind of have to do that anyways.",
        stage: "closing_thank_you"
      },
      {
        utt_id: "u054",
        t_start_ms: 1900000,
        t_end_ms: 1920000,
        speaker_id: "tech",
        text: "So great. We'll go ahead, I'll eliminate both of the gas options, and we'll stay with the Bryant and the Bosch.",
        stage: "closing_thank_you"
      },
      {
        utt_id: "u055",
        t_start_ms: 1920000,
        t_end_ms: 1938000,
        speaker_id: "tech",
        text: "And very cool. And let me go ahead and get the $1,000 for today. $1,009. So do you need a Visa or MasterCard?",
        stage: "closing_thank_you"
      },
      {
        utt_id: "u056",
        t_start_ms: 1913000,
        t_end_ms: 1925000,
        speaker_id: "cust",
        text: "I think it's a MasterCard. If I can find it.",
        stage: "closing_thank_you"
      },
      {
        utt_id: "u057",
        t_start_ms: 1925000,
        t_end_ms: 1938000,
        speaker_id: "tech",
        text: "Always important. There you go. Great.",
        stage: "closing_thank_you"
      }
    ],
    stages: [
      { stage: "introduction", label: "Introduction & Rapport", t_start_ms: 0, t_end_ms: 50000, utt_ids: ["u001", "u002", "u003", "u004", "u005", "u006", "u007"] },
      { stage: "problem_diagnosis", label: "Problem Diagnosis", t_start_ms: 50000, t_end_ms: 128000, utt_ids: ["u008", "u009", "u010"] },
      { stage: "solution_explanation", label: "Solution Explanation", t_start_ms: 128000, t_end_ms: 587000, utt_ids: ["u011", "u012", "u013", "u014", "u015", "u016", "u024", "u025", "u026", "u027", "u028", "u029", "u030", "u031", "u032"] },
      { stage: "maintenance_plan_offer", label: "Maintenance Plan", t_start_ms: 545000, t_end_ms: 565000, utt_ids: ["u017", "u018"] },
      { stage: "upsell_attempts", label: "Upsell & Heat Pump Positioning", t_start_ms: 587000, t_end_ms: 1749000, utt_ids: ["u019", "u020", "u021", "u022", "u023", "u033", "u034", "u035", "u036", "u037", "u038", "u039", "u040", "u041", "u042", "u043", "u044", "u045", "u046"] },
      { stage: "closing_thank_you", label: "Closing & Thank You", t_start_ms: 1749000, t_end_ms: 1938000, utt_ids: ["u047", "u048", "u049", "u050", "u051", "u052", "u053", "u054", "u055", "u056", "u057"] }
    ]
  },
  analysis: {
    stages: [
      {
        stage: "introduction",
        status: "partial",
        claim: "Friendly rapport-building through casual conversation, but completely missing professional introduction — no company name, technician name, or structured agenda for the upcoming sales presentation.",
        evidence: [
          {
            evidence_id: "e-intro-1",
            utt_id: "u001",
            quote: "Hey Luis, got you all done... built all your equipment options",
            why_it_matters: "Jumps directly into results without establishing professional context. Customer doesn't know who they're dealing with formally."
          },
          {
            evidence_id: "e-intro-2",
            utt_id: "u005",
            quote: "So what are you up to for the rest of the day?",
            why_it_matters: "Good rapport-building question, but should come after a professional introduction and agenda-setting."
          }
        ],
        impact: [
          "No professional authority established — customer doesn't hear company name or technician credentials",
          "No agenda set, so customer doesn't know what to expect or how long the presentation will take",
          "Rapport is decent but purely casual; misses chance to frame the interaction as a professional consultation"
        ],
        recommendations: [
          "Add a 15-second structured opener: 'I'm [Name] with [Company]. I've completed the repair and also prepared some options for you — mind if I walk you through them? Should take about 20 minutes.'",
          "Confirm the customer's available time before launching into a 30-minute presentation",
          "Mirror the customer's primary concern early to anchor the conversation"
        ]
      },
      {
        stage: "problem_diagnosis",
        status: "good",
        claim: "Effective diagnostic communication using quantified before/after data and honest prognosis, creating natural urgency for replacement discussion.",
        evidence: [
          {
            evidence_id: "e-diag-1",
            utt_id: "u008",
            quote: "below freezing temperature at 41... now we have that 20-degree difference... definitely band-aid",
            why_it_matters: "Quantified the problem and repair outcome with specific temperature readings, building technical credibility. The 'band-aid' framing is honest and sets up the replacement conversation."
          },
          {
            evidence_id: "e-diag-2",
            utt_id: "u010",
            quote: "month to 2 months... efficiency drop again. And we still have those mold and those issues",
            why_it_matters: "Sets realistic timeline expectation and mentions multiple ongoing issues (mold, efficiency), creating multi-dimensional urgency."
          },
          {
            evidence_id: "e-diag-3",
            utt_id: "u009",
            quote: "It's an old unit.",
            why_it_matters: "Customer independently acknowledges the system's age — confirms the diagnosis resonates and the customer is receptive to replacement options."
          }
        ],
        impact: [
          "Customer clearly understands the temporary nature of the repair",
          "Natural and non-pushy transition to discussing replacement options",
          "Trust established through honest assessment rather than overselling the repair"
        ],
        recommendations: [
          "Could have asked the customer to describe their experience before the repair to build more shared understanding",
          "Document and present before/after readings visually (photo or printout) for the customer to reference later",
          "Mention estimated annual cost of repeated band-aid repairs to quantify the do-nothing cost"
        ]
      },
      {
        stage: "solution_explanation",
        status: "excellent",
        claim: "Comprehensive, well-structured explanation of all four equipment options with clear differentiation. Masterful use of California gas phase-out policy to frame heat pumps as forward-looking rather than premium. Addressed installation location and noise concerns thoroughly.",
        evidence: [
          {
            evidence_id: "e-sol-1",
            utt_id: "u011",
            quote: "total of 4 that I built... replace like for like... new furnace, new coil, new condenser, higher SEER rating",
            why_it_matters: "Clear structured overview of all four options before diving into details — gives the customer a mental framework."
          },
          {
            evidence_id: "e-sol-2",
            utt_id: "u012",
            quote: "gas furnaces being phased out... California's goal... every house to have a heat pump",
            why_it_matters: "Brilliant regulatory framing — positions heat pump as compliance/future-proofing rather than an upsell, reducing sales resistance."
          },
          {
            evidence_id: "e-sol-3",
            utt_id: "u016",
            quote: "R-32... 35% cooling savings, 30% heating savings... SEER from 12 to 15",
            why_it_matters: "Quantified benefits with specific savings percentages and SEER comparison."
          },
          {
            evidence_id: "e-sol-4",
            utt_id: "u030",
            quote: "swap the grill... egg carton version... did decrease noise by 20%",
            why_it_matters: "Proactively addressed noise concern with a specific, data-backed solution."
          },
          {
            evidence_id: "e-sol-5",
            utt_id: "u025",
            quote: "We are completely fine moving it to your attic... serviceability, maintenance, and efficiency",
            why_it_matters: "Honest pros/cons of installation locations, letting customer make informed choice."
          }
        ],
        impact: [
          "Customer demonstrates clear comprehension (u013: 'To light, higher efficiency, and then two different types of heat pumps')",
          "Technical credibility firmly established through specific data points",
          "Customer concerns about noise addressed proactively with quantified solution",
          "Regulatory context reduces perception of upselling"
        ],
        recommendations: [
          "Create a one-page comparison sheet the customer can take away for spouse discussion",
          "Summarize the 4 options in a simple table: type, price range, and 3 key benefits each",
          "Could have been more concise — the line-item walkthrough was very detailed and could lose attention"
        ]
      },
      {
        stage: "upsell_attempts",
        status: "excellent",
        claim: "Exceptional multi-layered upsell strategy combining rebate stacking, manufacturer credibility, technology differentiation (Bryant vs Bosch), and flexible financing — resulting in customer self-selecting heat pump and rejecting gas options without pressure.",
        evidence: [
          {
            evidence_id: "e-upsell-1",
            utt_id: "u021",
            quote: "Silicon Valley Clean Energy is a $2,500 off... Tech... $1,500 off... just barely got reintroduced like yesterday",
            why_it_matters: "Stacked rebates ($4,000+ total) make premium option financially competitive. 'Just yesterday' creates organic urgency without hard pressure."
          },
          {
            evidence_id: "e-upsell-2",
            utt_id: "u022",
            quote: "Daikin... we do the worldwide training for how to install Daikin",
            why_it_matters: "Establishes unique company expertise — not just any installer, but the company that trains others worldwide."
          },
          {
            evidence_id: "e-upsell-3",
            utt_id: "u035",
            quote: "Energy Star... tax cut rebate... either $1,000 or $2,000",
            why_it_matters: "Introduced an additional rebate tier the customer can pursue independently, stacking even more value."
          },
          {
            evidence_id: "e-upsell-4",
            utt_id: "u039",
            quote: "I would be interested on the heat pump, maybe these two. I'm not interested on the gas.",
            why_it_matters: "Customer voluntarily eliminates gas options — the upsell succeeded without direct pressure. This is the ideal outcome."
          },
          {
            evidence_id: "e-upsell-5",
            utt_id: "u041",
            quote: "GoodLeap... 12 months no interest... 120-month, 8.99%",
            why_it_matters: "Multiple financing tiers make the investment psychologically manageable."
          },
          {
            evidence_id: "e-upsell-6",
            utt_id: "u038",
            quote: "I had a heat pump before in another place, never had a problem with it... 20 years ago",
            why_it_matters: "Customer's own positive experience validates the heat pump recommendation — strongest possible buying signal."
          }
        ],
        impact: [
          "Customer self-selected heat pump over gas — zero pressure needed",
          "Rebate stacking reduced perceived cost by ~$4,000-$6,000",
          "Bosch introduced responsively to customer's top-vent preference, showing flexibility",
          "Financing discussion customer-initiated, indicating genuine purchase consideration",
          "Customer's past heat pump experience reinforces the recommendation"
        ],
        recommendations: [
          "Create a rebate summary document with deadlines and application steps",
          "Include estimated annual utility savings comparison (current vs heat pump) in follow-up email",
          "The Bosch introduction was reactive — could pre-build a top-vent option as standard",
          "Document the Energy Star tax rebate process clearly so spouse can review"
        ]
      },
      {
        stage: "maintenance_plan_offer",
        status: "needs_improvement",
        claim: "Maintenance program mentioned only as a warranty enhancer in one brief exchange — not explored as standalone value proposition, no pricing discussed, no program details shared.",
        evidence: [
          {
            evidence_id: "e-maint-1",
            utt_id: "u017",
            quote: "If you're on this maintenance program with us, we actually completely match the manufacturer warranties",
            why_it_matters: "Only mention of maintenance in entire 32-minute call. Presented as a warranty conditional, not as its own offering with independent value."
          },
          {
            evidence_id: "e-maint-2",
            utt_id: "u018",
            quote: "Got it.",
            why_it_matters: "Customer's minimal response suggests the maintenance plan didn't register as significant — it was buried in the warranty discussion."
          }
        ],
        impact: [
          "Customer has no understanding of what the maintenance plan includes or costs",
          "Missed recurring revenue opportunity regardless of equipment decision",
          "If customer delays equipment purchase, maintenance plan could still be sold for current system",
          "Warranty benefit mentioned but not leveraged as a decision-making factor"
        ],
        recommendations: [
          "Dedicate 2-3 minutes to the maintenance plan as a separate topic",
          "Present specific plan details: frequency of visits, what's inspected, annual cost",
          "Frame maintenance as protecting the investment: 'You're spending $25K+ on a system — here's how we keep it running at peak for decades'",
          "Offer maintenance plan as available regardless of equipment decision to capture the customer either way",
          "Connect to the mold/efficiency issues diagnosed earlier: 'Regular maintenance prevents exactly what happened with your current system'"
        ]
      },
      {
        stage: "closing_thank_you",
        status: "needs_improvement",
        claim: "Customer explicitly requested email follow-up and spouse consultation, but technician pivoted to a same-day deposit pitch using repair cost as leverage. Although $1,000 was ultimately collected, this approach risks trust damage and buyer's remorse.",
        evidence: [
          {
            evidence_id: "e-close-1",
            utt_id: "u047",
            quote: "I'd like to speak with my wife about all the options. Email me these",
            why_it_matters: "Clear, reasonable request for decision-making process involving spouse. This is a standard household purchase dynamic that should be respected."
          },
          {
            evidence_id: "e-close-2",
            utt_id: "u051",
            quote: "it would be so much easier if I didn't have to charge for the repair today... $1,000 down payment",
            why_it_matters: "Framing the repair charge as avoidable through a deposit is a high-pressure technique that contradicts the customer's stated decision process."
          },
          {
            evidence_id: "e-close-3",
            utt_id: "u052",
            quote: "Yeah, no, we won't do that today. You send me the information",
            why_it_matters: "Customer explicitly declined TWICE — first the commitment, then reiterated wanting information sent. Yet payment was still collected."
          },
          {
            evidence_id: "e-close-4",
            utt_id: "u055",
            quote: "And let me go ahead and get the $1,000 for today",
            why_it_matters: "After customer declined, technician still proceeds to collect payment. While the 3-day cancellation right exists, this undermines the consultative relationship built throughout the call."
          },
          {
            evidence_id: "e-close-5",
            utt_id: "u049",
            quote: "I like the idea of the thing being quieter and more efficient",
            why_it_matters: "Strong positive sentiment from customer — should be reinforced and documented for the follow-up, not immediately followed by a deposit ask."
          },
          {
            evidence_id: "e-close-6",
            utt_id: "u050",
            quote: "And not having gas leaks in the future",
            why_it_matters: "Safety-motivated buying signal. Customer is articulating their own reasons to buy — ideal for the follow-up email to mirror back."
          }
        ],
        impact: [
          "Risk of trust erosion after a strong consultative call — the closing contradicts the advisory tone",
          "Potential for buyer's remorse or 3-day cancellation when spouse reviews",
          "No specific follow-up time set — 'email me these' is vague and easy to let slip",
          "Missed opportunity to leverage the positive momentum into a scheduled joint call",
          "No formal thank-you or professional sign-off"
        ],
        recommendations: [
          "Respect the stated decision process: 'Absolutely, I'll email everything tonight. When would be a good time for me to follow up so I can answer any questions you and your wife might have?'",
          "Schedule a specific follow-up call within 48 hours with both decision-makers",
          "Send a concise comparison email within 24 hours reinforcing the customer's own words: quieter, more efficient, no gas concerns",
          "Include rebate deadlines in the email to create organic urgency without pressure",
          "If same-day deposit is company policy, explain the value proposition more clearly rather than framing it as avoiding the repair charge",
          "Add a proper professional close: thank the customer for their time, summarize next steps"
        ]
      }
    ],
    sales_insights: {
      what_went_well: [
        "Regulatory framing: Used California gas phase-out policy to position heat pumps as future-proofing rather than premium upselling — brilliant strategic move",
        "Rebate stacking: Combined SVCE ($2,500) + Tech ($1,500) + Energy Star tax rebate ($1,000-$2,000) to reduce perceived cost by $5,000-$6,000",
        "Responsive selling: Introduced Bosch option on the spot when customer expressed top-vent preference, demonstrating flexibility and product knowledge",
        "Technical credibility: Daikin worldwide training partnership, specific temperature readings, 20% noise reduction data point — all establish authority",
        "Customer self-selection: Heat pump selected and gas rejected by customer independently, which is the gold standard for consultative selling",
        "Quantified benefits throughout: 35% cooling savings, 30% heating savings, 60% utility bill savings, SEER 12→15, 20% noise reduction",
        "Financing breadth: Multiple GoodLeap options (12-mo 0%, 60-mo, 120-mo, 180-mo) with clear payment breakdowns",
        "Leveraged customer's own experience: Customer's prior positive heat pump experience (u038) validated the recommendation organically"
      ],
      what_was_missed: [
        "No professional introduction — company name never stated, technician doesn't introduce themselves formally",
        "Maintenance plan barely mentioned — massive recurring revenue opportunity left on the table",
        "No follow-up time scheduled — 'email me these' should have been converted to a specific date/time",
        "Same-day deposit push after explicit customer refusal risks damaging the consultative relationship",
        "Technician took a personal phone call mid-presentation (~19:35) — unprofessional and breaks engagement",
        "No written comparison document left with customer — everything was verbal, making spouse discussion harder",
        "Did not ask discovery questions about budget range or decision timeline early",
        "No urgency created around rebate expiration dates (Tech rebate mentioned as 'just reintroduced yesterday')",
        "The $1,009 repair charge as leverage for commitment is a pressure tactic that contradicts the advisory approach"
      ],
      buying_signals: [
        { signal: "Customer self-eliminated gas options: 'I'm not interested on the gas'", utt_id: "u039", confidence: 0.95 },
        { signal: "Customer expressed positive sentiment: 'I like the idea of the thing being quieter and more efficient'", utt_id: "u049", confidence: 0.90 },
        { signal: "Customer raised safety concern proactively: 'not having gas leaks in the future'", utt_id: "u050", confidence: 0.92 },
        { signal: "Customer initiated financing discussion unprompted", utt_id: "u040", confidence: 0.88 },
        { signal: "Customer's prior positive heat pump experience: 'never had a problem with it... 20 years'", utt_id: "u038", confidence: 0.85 },
        { signal: "Customer narrowed to specific models (Bryant and Bosch) based on features", utt_id: "u034", confidence: 0.87 },
        { signal: "Spouse decision-making required — not a rejection, just a process step", utt_id: "u047", confidence: 0.93 }
      ],
      follow_up_strategy: [
        { action: "Send polished comparison email: Bryant vs Bosch side-by-side with rebate breakdown, monthly payments, and customer's own stated priorities (quieter, efficient, no gas)", owner: "tech", due_in_hours: 12 },
        { action: "Schedule a 15-minute follow-up call with both Luis and spouse present", owner: "tech", due_in_hours: 48 },
        { action: "Prepare one-page ROI analysis: current annual utility cost vs projected cost with heat pump, payback period factoring in rebates", owner: "office", due_in_hours: 24 },
        { action: "Include rebate application deadlines and step-by-step process (especially SVCE PG&E bill requirement)", owner: "office", due_in_hours: 24 },
        { action: "Add duct sealing + HERS test details to the estimates as discussed", owner: "tech", due_in_hours: 24 },
        { action: "Send maintenance plan information as a separate value proposition regardless of equipment decision", owner: "office", due_in_hours: 48 }
      ]
    },
    tooling_disclosure: {
      transcription_tool: "AssemblyAI Universal-2",
      analysis_tooling: ["Claude Opus 4.6 for initial analysis", "Manual verification against raw transcript utterances"],
      notes: "All insights verified against original transcript timestamps. Speaker identification based on AssemblyAI diarization (Speaker A = Technician, Speaker B = Luis/Customer). Confidence scores reflect analysis certainty based on transcript evidence strength."
    }
  }
};